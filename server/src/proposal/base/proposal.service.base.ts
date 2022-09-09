/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Proposal, User } from "@prisma/client";

export class ProposalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProposalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProposalFindManyArgs>
  ): Promise<number> {
    return this.prisma.proposal.count(args);
  }

  async findMany<T extends Prisma.ProposalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProposalFindManyArgs>
  ): Promise<Proposal[]> {
    return this.prisma.proposal.findMany(args);
  }
  async findOne<T extends Prisma.ProposalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProposalFindUniqueArgs>
  ): Promise<Proposal | null> {
    return this.prisma.proposal.findUnique(args);
  }
  async create<T extends Prisma.ProposalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProposalCreateArgs>
  ): Promise<Proposal> {
    return this.prisma.proposal.create<T>(args);
  }
  async update<T extends Prisma.ProposalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProposalUpdateArgs>
  ): Promise<Proposal> {
    return this.prisma.proposal.update<T>(args);
  }
  async delete<T extends Prisma.ProposalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProposalDeleteArgs>
  ): Promise<Proposal> {
    return this.prisma.proposal.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.proposal
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
