import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  productId?: string;
}

export async function GET(
    req: Request,
    { params }: { params: IParams }
      ) {
        const { searchParams } = new URL(req.url)
        const categoryId = searchParams.get('categoryId') || undefined;
        try {
  
          
          if (!params.productId) {
            return new NextResponse("Product id is required", { status: 400 });
          }
          const { productId } = params;
      
          if (!productId || typeof productId !== 'string') {
            throw new Error('Invalid ID');
          }
          const product= await prismadb.product.findMany({
            where: {
              categoryId
            },
            include: {
              images: true,
              category: true,
            }
          });
  
          // const product = await prismadb.product.delete({
          //   where: {
          //     id: params.id
          //   },
          // });
        
          return NextResponse.json(product);
        } catch (error) {
          console.error('Error deleting user:', error);
          return new NextResponse("Internal error", { status: 500 });
        }
  };