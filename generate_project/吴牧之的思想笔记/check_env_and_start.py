import json
import os
import subprocess
import sys
import webbrowser

def check_npm_installed():
    """检查npm是否已安装"""
    try:
        subprocess.run(['npm', '--version'], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False

def install_nodejs():
    """指导用户安装Node.js"""
    print("Node.js和npm未安装，请先安装Node.js:")
    print("1. 访问 https://nodejs.org/ 下载安装包")
    print("2. 运行安装程序并按照提示安装")
    print("3. 安装完成后请重新运行此脚本")
    sys.exit(1)

def check_and_install_dependencies():
    # 检查npm是否可用
    # if not check_npm_installed():
    #     install_nodejs()

    # 获取当前脚本目录
    script_directory = os.path.dirname(os.path.abspath(__file__))
    print(f"Script directory: {script_directory}")

    # 检查package.json是否存在
    package_json_path = os.path.join(script_directory, 'package.json')
    if not os.path.exists(package_json_path):
        print("package.json not found in the script directory.")
        sys.exit(1)

    # 加载package.json
    with open(package_json_path, 'r') as f:
        package_json = json.load(f)

    # 获取依赖项
    dependencies = package_json.get('dependencies', {})

    # 检查node_modules目录是否存在
    node_modules_path = os.path.join(script_directory, 'node_modules')
    if not os.path.exists(node_modules_path):
        print("node_modules directory not found. Installing all dependencies...")
        try:
            # 在Windows上使用shell=True
            subprocess.run(['npm', 'install'], 
                         cwd=script_directory, 
                         check=True,
                         shell=os.name == 'nt')
            print("Dependencies installed successfully")
        except subprocess.CalledProcessError as e:
            print(f"Failed to install dependencies: {e}")
            sys.exit(1)

    # 检查并安装每个依赖项
    for package, version in dependencies.items():
        try:
            # 检查包是否已安装
            result = subprocess.run(['npm', 'list', package],
                                  cwd=script_directory,
                                  stdout=subprocess.PIPE,
                                  stderr=subprocess.PIPE,
                                  shell=os.name == 'nt',
                                  encoding='utf-8',
                                  errors='ignore')
            
            stdout = result.stdout or ""
            if '(empty)' in stdout or package not in stdout:
                print(f"Installing {package}...")
                subprocess.run(['npm', 'install', f"{package}@{version}"],
                             cwd=script_directory,
                             shell=os.name == 'nt')
        except Exception as e:
            print(f"Error checking/installing {package}: {e}")
def build_webpack(script_directory):
    """运行webpack构建"""
    print("Building webpack...")
    try:
        subprocess.run(['npx', 'webpack'], 
                      cwd=script_directory, 
                      shell=os.name == 'nt',
                      check=True)
        print("Webpack build completed successfully")
    except subprocess.CalledProcessError as e:
        print(f"Webpack build failed: {e}")
        sys.exit(1)

def start_server(script_directory):
    """启动服务器"""
    print("Starting server...")
    try:
        subprocess.Popen(['node', os.path.join(script_directory, 'server.js')],
                        shell=os.name == 'nt')
        
        # 打开浏览器
        webbrowser.open('http://localhost:3000/index.html')
    except Exception as e:
        print(f"Failed to start server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    script_directory = os.path.dirname(os.path.abspath(__file__))
    try:
        check_and_install_dependencies()
        build_webpack(script_directory)
        start_server(script_directory)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
