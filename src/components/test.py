import requests

# Replace with your GitHub username
username = "androiabledroid"

# GitHub API endpoint for user commits
url = f"https://api.github.com/users/{username}/events"

# Make a GET request to the API
response = requests.get(url)

if response.status_code == 200:
    events = response.json()
    commit_events = [event for event in events if event['type'] == 'PushEvent']
    for event in commit_events:
        for commit in event['payload']['commits']:
            print(f"Commit SHA: {commit['sha']}")
            print(f"Repository: {event['repo']['name']}")
            print(f"Date: {event['created_at']}")
            print("\n")
else:
    print(f"Failed to fetch commits. Status code: {response.status_code}")
