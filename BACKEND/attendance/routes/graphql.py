from fastapi import APIRouter
from strawberry.fastapi import GraphQLRouter
from schemas.attendanceSchema import schema

graphql_app = GraphQLRouter(schema)

router = APIRouter()
router.include_router(graphql_app, prefix="/graphql")
