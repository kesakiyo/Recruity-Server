interface IConf {
  app: {
    port: number;
  };
  swagger: {
    swaggerDefinition: {
      info: {
        title: string;
      };
      host: string;
      basePath: string;
    },
    apis: string[];
  };
}

const env = process.env.NODE_ENV || 'development';

export default require(`../conf/${env}.json`) as IConf;
