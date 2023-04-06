declare module "baffle" {
    export default function baffle(
      element: HTMLElement,
      options?: {
        characters?: string;
        speed?: number;
      }
    ): {
      start: () => any;
      reveal: (duration: number) => any;
    };
  }
  