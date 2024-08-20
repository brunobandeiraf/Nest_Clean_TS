import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
    // Error log
      log: ['warn', 'error'],
    })
  }

  // "It is an interface that you can implement in a provider class (such as a service) to define a method that will be called when the module containing the provider is initialized."
  onModuleInit() {
    return this.$connect()
  }

  // It is an interface that you can implement in a provider class to define a method that will be called when the module containing the provider is destroyed.
  onModuleDestroy() {
    return this.$disconnect()
  }
}