from fastapi import FastAPI
from routes.graphql import router as graphql_router

app = FastAPI()

# Register GraphQL routes
app.include_router(graphql_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Attendance Microservice with GraphQL!"}

# Run with: uvicorn main:app --reload
