interface ImportMetaEnv {
  readonly PROD: Boolean;
  readonly APPKEY: String;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface HonoEnv {
  Variable: {};
  Bindings: {
    APPKEY: string;
    PROD: boolean;
    DB?: any;
  };
}
