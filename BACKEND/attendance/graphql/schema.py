from ariadne import gql

type_defs = gql("""
    type Student {
        id: ID!
        name: String!
    }

    type Attendance {
        id: ID!
        student_id: ID!
        date: String!
        status: String!
        student_name: String!  # Agregamos el nombre del estudiante
    }

    type Query {
        getStudentAttendance(student_id: ID!): [Attendance]
    }

    type Mutation {
        registerAttendance(student_id: ID!, status: String!): Attendance
    }
""")
