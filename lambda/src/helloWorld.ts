// import { Context, APIGatewayEvent } from 'aws-lambda'

export const handler = async (/*event: APIGatewayEvent, context: Context*/) => {
  return {
    statusCode: 200,
    body: 'Hello World!',
  }
}
