import requests

# Replace with your deployed Vercel URL
DEPLOYMENT_URL = "https://sayed-ali-1.vercel.app/"

def check_url(url):
    try:
        response = requests.get(url)
        print(f"URL: {url}")
        print(f"Status Code: {response.status_code}")

        if response.status_code == 200:
            print("✅ The deployment exists and the URL is reachable.")
        elif response.status_code == 404:
            print("❌ NOT_FOUND (404). Possible causes:")
            print("- URL is incorrect or has a typo")
            print("- SPA routing is not configured correctly in Vercel")
            print("- The output directory is wrong or missing index.html")
        else:
            print(f"⚠️ Received unexpected status code: {response.status_code}")
        
        # Optionally, print first 200 chars of the response to see content
        print("Response snippet:", response.text[:200])

    except requests.ConnectionError:
        print("❌ Cannot connect to the deployment URL. Check network or DNS.")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

def main():
    check_url(DEPLOYMENT_URL)
    # Check assets (optional)
    assets = [
        "assets/index-DeBHHDHb.js",
        "assets/index-CY7AXiVJ.css",
        "assets/doctor-D_qSJwjJ.jpeg"
    ]
    for asset in assets:
        check_url(f"{DEPLOYMENT_URL}/{asset}")

if __name__ == "__main__":
    main()
