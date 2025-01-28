import json
import os
import subprocess
import sys
import webbrowser


def check_and_install_dependencies():
    # Get the directory of the current script
    script_directory = os.path.dirname(os.path.abspath(__file__))
    print(f"Script directory: {script_directory}")

    # Check if package-lock.json exists in the script directory
    package_lock_path = os.path.join(script_directory, 'package-lock.json')
    if not os.path.exists(package_lock_path):
        print("package-lock.json not found in the script directory.")
        sys.exit(1)
    # Load package-lock.json
    with open(script_directory+'/package.json', 'r') as f:
        package_lock = json.load(f)

    # Extract dependencies
    dependencies = package_lock.get('packages', {}).get('', {}).get('dependencies', {})

    # Check and install each dependency
    for package, version in dependencies.items():
        try:
            # Check if the package is installed
            subprocess.check_output(['npm', 'list', package])
        except subprocess.CalledProcessError:
            # If not installed, install the package
            print(f"Installing {package}...")
            subprocess.check_call(['npm', 'install', f"{package}@{version}"])

def start_server(script_directory):
    # Start the server
    print("Starting server...")
    subprocess.Popen(['node', script_directory+'/server.js'])

    # Open the default web browser to the specified URL
    webbrowser.open('http://localhost:3000/index.html')

if __name__ == "__main__":
    script_directory = os.path.dirname(os.path.abspath(__file__))
    check_and_install_dependencies()
    start_server(script_directory)