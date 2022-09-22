import { Module } from "@nestjs/common";
import { ProposalModuleBase } from "./base/proposal.module.base";
import { ProposalService } from "./proposal.service";
import { ProposalController } from "./proposal.controller";

@Module({
  imports: [ProposalModuleBase],
  controllers: [ProposalController],
  providers: [ProposalService],
  exports: [ProposalService],
})
export class ProposalModule {}
