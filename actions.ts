// "use server";

// import prisma from "./app/lib/db";

// export async function createListing({ userId }: { userId: string }) {
//   const data = await prisma.listing.findFirst({
//     where: {
//       userId: userId,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   if(data === null) {
//     const data = await prisma.listing.create({
//         data
//     })
//   }
// }

// export async function createCategory(formData: FormData) {
//   const categoryName = formData.get("categoryName");
// }
