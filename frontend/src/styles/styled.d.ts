import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      header: {
        background: string;
        border: string;
      };

      body: {
        background: string;
        color: string;
      };

      form: {
        background: string;
        card: string;
        spanCard: string;
      };

      titlesColor: {
        color: string;
      };
    };
  }
}
