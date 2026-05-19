import os
import shutil
import subprocess
import sys
import time
import webbrowser
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "5173"))
HOST = os.environ.get("HOST", "127.0.0.1")
URL = f"http://{HOST}:{PORT}"


def npm_command():
    npm = shutil.which("npm.cmd") or shutil.which("npm")
    if not npm:
        print("npm was not found. Please install Node.js first: https://nodejs.org/")
        sys.exit(1)
    return npm


def ensure_dependencies(npm):
    if (ROOT / "node_modules").exists():
        return

    print("node_modules not found. Installing dependencies first...")
    subprocess.check_call([npm, "install"], cwd=ROOT)


def main():
    npm = npm_command()
    ensure_dependencies(npm)

    print(f"Starting portfolio website at {URL}")
    print("Press Ctrl+C to stop the server.")

    process = subprocess.Popen(
        [npm, "run", "dev", "--", "--host", HOST, "--port", str(PORT)],
        cwd=ROOT,
        shell=False,
    )

    time.sleep(2)
    webbrowser.open(URL)

    try:
        process.wait()
    except KeyboardInterrupt:
        print("\nStopping website server...")
        process.terminate()
        process.wait(timeout=10)


if __name__ == "__main__":
    main()
