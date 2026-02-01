import subprocess

def run_build():
    try:
        # Run the Vite build command
        result = subprocess.run(
            ["npm", "run", "build"],
            capture_output=True,
            text=True,
            check=False
        )

        stdout = result.stdout
        stderr = result.stderr

        print("=== STDOUT ===")
        print(stdout)
        print("=== STDERR ===")
        print(stderr)

        # Check for common Vercel errors
        if "vite" in stderr.lower() and "error" in stderr.lower():
            print("\n⚠️ Possible Vite build issue detected.")
        if "node" in stderr.lower() and "version" in stderr.lower():
            print("\n⚠️ Possible Node version mismatch. Vercel may need a newer Node version.")
        if "cannot find module" in stderr.lower():
            print("\n⚠️ Missing dependency detected. Try running 'npm install'.")
        if result.returncode != 0:
            print(f"\n❌ Build failed with exit code {result.returncode}")
        else:
            print("\n✅ Build completed successfully locally.")

    except FileNotFoundError:
        print("❌ npm not found. Make sure Node.js and npm are installed.")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    run_build()
