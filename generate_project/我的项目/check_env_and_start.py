import json
import os
import subprocess
import sys
import webbrowser

def check_and_install_dependencies():
    # Get the directory of the current script
    script_directory = os.path.dirname(os.path.abspath(__file__))
    print(f"Script directory: {script_directory}")

    # Check if package.json exists in the script directory
    package_json_path = os.path.join(script_directory, 'package.json')
    if not os.path.exists(package_json_path):
        print("package.json not found in the script directory.")
        sys.exit(1)

    # Load package.json
    with open(package_json_path, 'r') as f:
        package_json = json.load(f)

    # Extract dependencies
    dependencies = package_json.get('dependencies', {})

    # Check if node_modules directory exists
    node_modules_path = os.path.join(script_directory, 'node_modules')
    if not os.path.exists(node_modules_path):
        print("node_modules directory not found. Installing all dependencies...")
        subprocess.run(['npm', 'install'], cwd=script_directory, shell=True, check=True)
        subprocess.run(['npm', 'install','sqlite3'], cwd=script_directory, shell=True, check=True)
        subprocess.run(['npm', 'install','ws'], cwd=script_directory, shell=True, check=True)

    # Check and install each dependency
    for package, version in dependencies.items():
        try:
            # Check if the package is installed
            output = subprocess.check_output(['npm', 'list', package], cwd=script_directory, shell=True, text=True, encoding='utf-8', errors='ignore')
            if '(empty)' in output:
                raise subprocess.CalledProcessError(0, f'npm list {package}', output)
        except subprocess.CalledProcessError:
            # If not installed, install the package
            print(f"Installing {package}...")
            subprocess.run(['npm', 'install', f"{package}@{version}"], cwd=script_directory, shell=True)
def build_webpack(script_directory):
    # Run webpack build
    print("Building webpack...")
    try:
        subprocess.run(['npx', 'webpack'], cwd=script_directory, shell=True, check=True)
        print("Webpack build completed successfully")
    except subprocess.CalledProcessError as e:
        print(f"Webpack build failed: {e}")
        sys.exit(1)

def start_server(script_directory):
    # Start the server
    print("Starting server...")
    subprocess.Popen(['node', script_directory+'/server.js'])

    # Open the default web browser to the specified URL
    webbrowser.open('http://localhost:3000/index.html')

if __name__ == "__main__":
    script_directory = os.path.dirname(os.path.abspath(__file__))
    check_and_install_dependencies()
    build_webpack(script_directory)
    start_server(script_directory)
