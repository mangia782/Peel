import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  guestRooms?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  locationAddress?: string;
  category?: string;
}

export default async function getListings(
  params: IListingsParams
) {
  try {
    const {
      userId,
      roomCount, 
      guestRooms, 
      bathroomCount, 
      locationValue,
      locationAddress,
      startDate,
      endDate,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (guestRooms) {
      query.guestRooms = {
        gte: +guestRooms
      }
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (locationAddress) {
      query.locationAddress = locationAddress;
    }


    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
