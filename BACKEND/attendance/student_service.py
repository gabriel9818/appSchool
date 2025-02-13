import requests

GRAPHQL_URL = "http://18.210.147.186:4000/graphql"

def get_student_by_id(student_id):
    query = """
    query GetStudent($id: ID!) {
      getStudentById(id: $id) {
        id
        name
      }
    }
    """
    variables = {"id": student_id}

    response = requests.post(GRAPHQL_URL, json={"query": query, "variables": variables})

    if response.status_code == 200:
        data = response.json()
        return data.get("data", {}).get("getStudentById")
    else:
        return None
