// import { useRouter } from "next/dist/client/router"

// export default function DashBoard() {
//   const router = useRouter()
//   return(
//     <div>
//       <h1>{router.query.id}</h1>
//     </div>
//   )
// }
import React from "react"
import Paperbase from "../../components/paperbase/Paperbase";
import { useRouter } from "next/dist/client/router"


export default function DashBoard() {
  const router = useRouter()
	return (
      <Paperbase projectId={router.query.id}></Paperbase>
			
	)
}