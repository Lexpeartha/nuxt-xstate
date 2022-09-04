export interface CustomMachinesOptions {
    dir?: string,
    importSuffix?: string,
  }

export interface ModuleOptions {
    minimal: boolean;
    customMachines: CustomMachinesOptions | false;
  }
