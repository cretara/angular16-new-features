import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

export const entityMetadataMap: EntityMetadataMap = {
  Post: {},
};

export const angular16EntityConfig: EntityDataModuleConfig = {
  entityMetadata: entityMetadataMap,
};
