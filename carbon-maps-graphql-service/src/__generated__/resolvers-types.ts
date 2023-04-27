import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BalancingAuthority = {
  __typename?: 'BalancingAuthority';
  gcO2eqkWh: Scalars['Float'];
  id: Scalars['ID'];
  lastUpdateSeconds: Scalars['String'];
  percent: Scalars['Int'];
  pointTime: Scalars['String'];
};

export type BalancingAuthorityFilter = {
  latitude: Scalars['String'];
  longitude: Scalars['String'];
};

export type DataCenterLocation = {
  __typename?: 'DataCenterLocation';
  balancingAuthority?: Maybe<BalancingAuthority>;
  buildingAddress: Scalars['String'];
  buildingCityStatePostal: Scalars['String'];
  buildingId: Scalars['String'];
  country: Scalars['String'];
  dataCenter: Scalars['String'];
  dataCenterOperator: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  metroArea: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  balancingAuthority?: Maybe<BalancingAuthority>;
  dataCenterLocations: Array<DataCenterLocation>;
};


export type QueryBalancingAuthorityArgs = {
  filter: BalancingAuthorityFilter;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BalancingAuthority: ResolverTypeWrapper<BalancingAuthority>;
  BalancingAuthorityFilter: BalancingAuthorityFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DataCenterLocation: ResolverTypeWrapper<DataCenterLocation>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BalancingAuthority: BalancingAuthority;
  BalancingAuthorityFilter: BalancingAuthorityFilter;
  Boolean: Scalars['Boolean'];
  DataCenterLocation: DataCenterLocation;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
}>;

export type BalancingAuthorityResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['BalancingAuthority'] = ResolversParentTypes['BalancingAuthority']> = ResolversObject<{
  gcO2eqkWh?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastUpdateSeconds?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pointTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataCenterLocationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['DataCenterLocation'] = ResolversParentTypes['DataCenterLocation']> = ResolversObject<{
  balancingAuthority?: Resolver<Maybe<ResolversTypes['BalancingAuthority']>, ParentType, ContextType>;
  buildingAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buildingCityStatePostal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  buildingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dataCenter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dataCenterOperator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metroArea?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  balancingAuthority?: Resolver<Maybe<ResolversTypes['BalancingAuthority']>, ParentType, ContextType, RequireFields<QueryBalancingAuthorityArgs, 'filter'>>;
  dataCenterLocations?: Resolver<Array<ResolversTypes['DataCenterLocation']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  BalancingAuthority?: BalancingAuthorityResolvers<ContextType>;
  DataCenterLocation?: DataCenterLocationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

