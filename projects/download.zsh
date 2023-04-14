#!/bin/zsh

# set the filename and URL
FILENAME="download.json"
URL="https://api.notion.com/v1/databases/3d56c46467484522b7c44450ad50387f/query"

# set the authorization token
AUTH_TOKEN="Bearer secret_xg52ZD2mMlVHOdgO3jJpILJEgB1UOtMcrPcSjqYVIck"

# make the API request and save the response to a file
curl -s -X POST $URL \
     -H "Authorization: $AUTH_TOKEN" \
     -H 'Notion-Version: 2022-06-28' \
     -H "Content-Type: application/json" \
     | jq -c '(.results[] | select(.properties.Description.rich_text != []) | {id: .id, name: .properties.Name.title[0].text.content, link: .properties.Link.url, description: .properties.Description.rich_text[0].text.content, revenue: .properties.Revenue.number, started: .properties.Started.rich_text[0].text.content, status: .properties.Status.status.name})' > $FILENAME
     #  -d '{"filter":{},"sorts":[{"property":"Created Time","direction":"descending"}],"page_size":100}' 

# check if the file exists and is not empty
if [[ -s $FILENAME ]]; then
  echo "JSON file saved successfully!"
else
  echo "Error: JSON file not created. Please check your API key and database ID."
fi

# Create an empty array
json_array=()

# Read the file line by line and append each line to the array
while read -r line; do
  json_array+=("$line")
done < download.json

# Convert the array to a JSON array and save it to a new file
echo "[${(j:,:)json_array}]" > projects.json

sleep 3

if [[ $(git status --porcelain) ]]; then
  echo "Changes detected, running command..."
  echo "Command to run"
  git commit -am "Notion changes: updating at $(date +'%B %d, %Y %l:%M%P')"
fi
