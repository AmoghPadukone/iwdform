import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const prisma = new PrismaClient();
    const badges = ['aiml', 'fullstack', 'datascience', 'data analytics'];
    const createdBadges = [];

    try {
        // Create badges
        for (const badge of badges) {
            const createdBadge = await prisma.domain.create({
                data: {
                    name: badge
                }
            });
            createdBadges.push(createdBadge.name);
        }

        // Return the created badges
        return NextResponse.json({
            badges: createdBadges
        });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    } finally {
        await prisma.$disconnect();
    }
}
