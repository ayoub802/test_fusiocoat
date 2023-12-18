import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { NextApiRequest } from "next";


export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const body = await req.json();

    const { name } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const store = await prismadb.category.updateMany({
      where: {
        id: params.storeId,
      },
      data: {
        name
      }
    });
  
    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORE_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

interface IParams {
  categoryId?: string;
}

// export async function DELETE(  
//   req: Request,
//   { params }: { params: IParams }
//   ){
//   try {

    
//     if (!params.categoryId) {
//       return new NextResponse("Product id is required", { status: 400 });
//     }
//     const { categoryId } = params;

//     if (!categoryId || typeof categoryId !== 'string') {
//       throw new Error('Invalid ID');
//     }

//     console.log(categoryId);
    
//     const store = await prismadb.category.delete({
//       where: {
//         id: params.categoryId,
//       }
//     });
  
//     return NextResponse.json("message");
//   } catch (error) {
//     console.log('[STORE_DELETE]', error);
//     // return new NextResponse("Internal error", { status: 500 });
//   }
// };

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    console.log("Params => ", params.storeId);
    
    // const { categoryId } = req.;
    if (!params.storeId) {
      return new NextResponse(`Category id is required ${params.storeId}`, { status: 400 });
    }

    const { storeId } = params;

    if (!storeId || typeof storeId !== 'string') {
      throw new Error('Invalid ID');
    }

    console.log(storeId);
    
    const store = await prismadb.category.delete({
      where: {
        id: storeId,
      }
    });
  

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORE_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};