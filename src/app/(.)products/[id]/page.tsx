import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSWRComponent";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"


export default async function ModalProduct({
  params
}:{
   params: Promise<{id: number}>
}) {
  const {id} = await params;

  return (
  
     <Dialog
     open
     >
        <DialogContent className="sm:max-w-sm" >
          <ProductDetailUseSWRComponent proId={id}/>
        </DialogContent>
    </Dialog>
  )
}
