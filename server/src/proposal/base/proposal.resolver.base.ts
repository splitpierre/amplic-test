/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateProposalArgs } from "./CreateProposalArgs";
import { UpdateProposalArgs } from "./UpdateProposalArgs";
import { DeleteProposalArgs } from "./DeleteProposalArgs";
import { ProposalFindManyArgs } from "./ProposalFindManyArgs";
import { ProposalFindUniqueArgs } from "./ProposalFindUniqueArgs";
import { Proposal } from "./Proposal";
import { Project } from "../../project/base/Project";
import { User } from "../../user/base/User";
import { ProposalService } from "../proposal.service";

@graphql.Resolver(() => Proposal)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProposalResolverBase {
  constructor(
    protected readonly service: ProposalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Proposal",
    action: "read",
    possession: "any",
  })
  async _proposalsMeta(
    @graphql.Args() args: ProposalFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Proposal])
  @nestAccessControl.UseRoles({
    resource: "Proposal",
    action: "read",
    possession: "any",
  })
  async proposals(
    @graphql.Args() args: ProposalFindManyArgs
  ): Promise<Proposal[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Proposal, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Proposal",
    action: "read",
    possession: "own",
  })
  async proposal(
    @graphql.Args() args: ProposalFindUniqueArgs
  ): Promise<Proposal | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Proposal)
  @nestAccessControl.UseRoles({
    resource: "Proposal",
    action: "create",
    possession: "any",
  })
  async createProposal(
    @graphql.Args() args: CreateProposalArgs
  ): Promise<Proposal> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        project: {
          connect: args.data.project,
        },

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Proposal)
  @nestAccessControl.UseRoles({
    resource: "Proposal",
    action: "update",
    possession: "any",
  })
  async updateProposal(
    @graphql.Args() args: UpdateProposalArgs
  ): Promise<Proposal | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          project: {
            connect: args.data.project,
          },

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Proposal)
  @nestAccessControl.UseRoles({
    resource: "Proposal",
    action: "delete",
    possession: "any",
  })
  async deleteProposal(
    @graphql.Args() args: DeleteProposalArgs
  ): Promise<Proposal | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Project, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async project(@graphql.Parent() parent: Proposal): Promise<Project | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: Proposal): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
