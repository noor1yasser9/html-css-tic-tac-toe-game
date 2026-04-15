@Module({
  controllers: [StyleGridController],
  providers  : [StyleGridService],
  exports    : [StyleGridService],
})
export class StyleGridModule {}