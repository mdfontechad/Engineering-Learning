type ApiResponse=
|{status:"success",data:string[]}
|{status:"failed",message:string}

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    // TypeScript knows: response.data exists
  } else {
    // TypeScript knows: response.message exists
  }
}