import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const prisma = new PrismaClient();

    try {
        const body = await req.json();
        const data = body.data;

        // Fetch Domain records based on domain names
        const domains = await prisma.domain.findMany({
            where: {
                name: {
                    in: data.domains.map((domain: any) => domain.value)
                }
            }
        });

        // Create CompanyDetails record and associate it with the fetched Domain records
        const registration = await prisma.companyDetails.create({
            data: {
                phoneNumber: data.phoneNumber,
                companyName: data.companyName,
                companyLinkedin: data.companyLinkedin,
                companyWebsite: data.companyWebsite,
                position: data.position,
                emailAddress: data.emailAddress,
                domains: {
                    connect: domains.map(domain => ({ id: domain.id }))
                }
            }
        });

        return NextResponse.json({
            'result':registration
        });
    } catch (error) {
        console.log(error);
        // Log the error and return a generic error response
        return NextResponse.error();
    } finally {
        await prisma.$disconnect();
    }
}
