export async function GET(request,{params}) {
    const {id,name} = await params
    console.log('test')
  return Response.json({
    id: id,
    name:name
  })
}