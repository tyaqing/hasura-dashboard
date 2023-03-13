export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  email: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonWebToken = {
  __typename?: 'JsonWebToken';
  token: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  Login?: Maybe<JsonWebToken>;
  Signup?: Maybe<CreateUserOutput>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Npmvs_Lucky_Packages_Args = {
  num?: InputMaybe<Scalars['Int']>;
};

export type Npmvs_Lucky_Tags_Args = {
  num?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "npmvs.package" */
export type Npmvs_Package = {
  __typename?: 'npmvs_package';
  /** 唯一ID */
  id: Scalars['Int'];
  /** 包名 */
  name: Scalars['String'];
  /** An array relationship */
  package_tags: Array<Npmvs_Package_Tag>;
  /** 权重 */
  weight: Scalars['Int'];
};


/** columns and relationships of "npmvs.package" */
export type Npmvs_PackagePackage_TagsArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};

export type Npmvs_Package_Aggregate = {
  __typename?: 'npmvs_package_aggregate';
  aggregate?: Maybe<Npmvs_Package_Aggregate_Fields>;
  nodes: Array<Npmvs_Package>;
};

/** aggregate fields of "npmvs.package" */
export type Npmvs_Package_Aggregate_Fields = {
  __typename?: 'npmvs_package_aggregate_fields';
  avg?: Maybe<Npmvs_Package_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Npmvs_Package_Max_Fields>;
  min?: Maybe<Npmvs_Package_Min_Fields>;
  stddev?: Maybe<Npmvs_Package_Stddev_Fields>;
  stddev_pop?: Maybe<Npmvs_Package_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Npmvs_Package_Stddev_Samp_Fields>;
  sum?: Maybe<Npmvs_Package_Sum_Fields>;
  var_pop?: Maybe<Npmvs_Package_Var_Pop_Fields>;
  var_samp?: Maybe<Npmvs_Package_Var_Samp_Fields>;
  variance?: Maybe<Npmvs_Package_Variance_Fields>;
};


/** aggregate fields of "npmvs.package" */
export type Npmvs_Package_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Npmvs_Package_Avg_Fields = {
  __typename?: 'npmvs_package_avg_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Float']>;
  /** 权重 */
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "npmvs.package". All fields are combined with a logical 'AND'. */
export type Npmvs_Package_Bool_Exp = {
  _and?: InputMaybe<Array<Npmvs_Package_Bool_Exp>>;
  _not?: InputMaybe<Npmvs_Package_Bool_Exp>;
  _or?: InputMaybe<Array<Npmvs_Package_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  package_tags?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
  weight?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Npmvs_Package_Max_Fields = {
  __typename?: 'npmvs_package_max_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Int']>;
  /** 包名 */
  name?: Maybe<Scalars['String']>;
  /** 权重 */
  weight?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Npmvs_Package_Min_Fields = {
  __typename?: 'npmvs_package_min_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Int']>;
  /** 包名 */
  name?: Maybe<Scalars['String']>;
  /** 权重 */
  weight?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "npmvs.package". */
export type Npmvs_Package_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package_tags_aggregate?: InputMaybe<Npmvs_Package_Tag_Aggregate_Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** select columns of table "npmvs.package" */
export enum Npmvs_Package_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Weight = 'weight'
}

/** aggregate stddev on columns */
export type Npmvs_Package_Stddev_Fields = {
  __typename?: 'npmvs_package_stddev_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Float']>;
  /** 权重 */
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Npmvs_Package_Stddev_Pop_Fields = {
  __typename?: 'npmvs_package_stddev_pop_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Float']>;
  /** 权重 */
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Npmvs_Package_Stddev_Samp_Fields = {
  __typename?: 'npmvs_package_stddev_samp_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Float']>;
  /** 权重 */
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Npmvs_Package_Sum_Fields = {
  __typename?: 'npmvs_package_sum_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Int']>;
  /** 权重 */
  weight?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "npmvs.package_tag" */
export type Npmvs_Package_Tag = {
  __typename?: 'npmvs_package_tag';
  id: Scalars['Int'];
  /** An object relationship */
  package: Npmvs_Package;
  package_id: Scalars['Int'];
  /** An object relationship */
  tag: Npmvs_Tag;
  tag_id: Scalars['Int'];
};

/** order by aggregate values of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Aggregate_Order_By = {
  avg?: InputMaybe<Npmvs_Package_Tag_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Npmvs_Package_Tag_Max_Order_By>;
  min?: InputMaybe<Npmvs_Package_Tag_Min_Order_By>;
  stddev?: InputMaybe<Npmvs_Package_Tag_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Npmvs_Package_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Npmvs_Package_Tag_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Npmvs_Package_Tag_Sum_Order_By>;
  var_pop?: InputMaybe<Npmvs_Package_Tag_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Npmvs_Package_Tag_Var_Samp_Order_By>;
  variance?: InputMaybe<Npmvs_Package_Tag_Variance_Order_By>;
};

/** order by avg() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "npmvs.package_tag". All fields are combined with a logical 'AND'. */
export type Npmvs_Package_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Npmvs_Package_Tag_Bool_Exp>>;
  _not?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Npmvs_Package_Tag_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  package?: InputMaybe<Npmvs_Package_Bool_Exp>;
  package_id?: InputMaybe<Int_Comparison_Exp>;
  tag?: InputMaybe<Npmvs_Tag_Bool_Exp>;
  tag_id?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "npmvs.package_tag". */
export type Npmvs_Package_Tag_Order_By = {
  id?: InputMaybe<Order_By>;
  package?: InputMaybe<Npmvs_Package_Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Npmvs_Tag_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** select columns of table "npmvs.package_tag" */
export enum Npmvs_Package_Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PackageId = 'package_id',
  /** column name */
  TagId = 'tag_id'
}

/** order by stddev() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "npmvs_package_tag" */
export type Npmvs_Package_Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Npmvs_Package_Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Npmvs_Package_Tag_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  package_id?: InputMaybe<Scalars['Int']>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "npmvs.package_tag" */
export type Npmvs_Package_Tag_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  package_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Npmvs_Package_Var_Pop_Fields = {
  __typename?: 'npmvs_package_var_pop_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Float']>;
  /** 权重 */
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Npmvs_Package_Var_Samp_Fields = {
  __typename?: 'npmvs_package_var_samp_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Float']>;
  /** 权重 */
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Npmvs_Package_Variance_Fields = {
  __typename?: 'npmvs_package_variance_fields';
  /** 唯一ID */
  id?: Maybe<Scalars['Float']>;
  /** 权重 */
  weight?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "npmvs.tag" */
export type Npmvs_Tag = {
  __typename?: 'npmvs_tag';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  package_tags: Array<Npmvs_Package_Tag>;
};


/** columns and relationships of "npmvs.tag" */
export type Npmvs_TagPackage_TagsArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "npmvs.tag". All fields are combined with a logical 'AND'. */
export type Npmvs_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Npmvs_Tag_Bool_Exp>>;
  _not?: InputMaybe<Npmvs_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Npmvs_Tag_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  package_tags?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "npmvs.tag". */
export type Npmvs_Tag_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  package_tags_aggregate?: InputMaybe<Npmvs_Package_Tag_Aggregate_Order_By>;
};

/** select columns of table "npmvs.tag" */
export enum Npmvs_Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "npmvs_tag" */
export type Npmvs_Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Npmvs_Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Npmvs_Tag_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** execute function "npmvs.lucky_packages" which returns "npmvs.package" */
  npmvs_lucky_packages: Array<Npmvs_Package>;
  /** execute function "npmvs.lucky_packages" and query aggregates on result of table type "npmvs.package" */
  npmvs_lucky_packages_aggregate: Npmvs_Package_Aggregate;
  /** execute function "npmvs.lucky_tags" which returns "npmvs.tag" */
  npmvs_lucky_tags: Array<Npmvs_Tag>;
  /** fetch data from the table: "npmvs.package" */
  npmvs_package: Array<Npmvs_Package>;
  /** fetch data from the table: "npmvs.package_tag" */
  npmvs_package_tag: Array<Npmvs_Package_Tag>;
  /** fetch data from the table: "npmvs.package_tag" using primary key columns */
  npmvs_package_tag_by_pk?: Maybe<Npmvs_Package_Tag>;
  /** fetch data from the table: "npmvs.tag" */
  npmvs_tag: Array<Npmvs_Tag>;
  /** fetch data from the table: "npmvs.tag" using primary key columns */
  npmvs_tag_by_pk?: Maybe<Npmvs_Tag>;
};


export type Query_RootNpmvs_Lucky_PackagesArgs = {
  args: Npmvs_Lucky_Packages_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Query_RootNpmvs_Lucky_Packages_AggregateArgs = {
  args: Npmvs_Lucky_Packages_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Query_RootNpmvs_Lucky_TagsArgs = {
  args: Npmvs_Lucky_Tags_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};


export type Query_RootNpmvs_PackageArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Query_RootNpmvs_Package_TagArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


export type Query_RootNpmvs_Package_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootNpmvs_TagArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};


export type Query_RootNpmvs_Tag_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** execute function "npmvs.lucky_packages" which returns "npmvs.package" */
  npmvs_lucky_packages: Array<Npmvs_Package>;
  /** execute function "npmvs.lucky_packages" and query aggregates on result of table type "npmvs.package" */
  npmvs_lucky_packages_aggregate: Npmvs_Package_Aggregate;
  /** execute function "npmvs.lucky_tags" which returns "npmvs.tag" */
  npmvs_lucky_tags: Array<Npmvs_Tag>;
  /** fetch data from the table: "npmvs.package" */
  npmvs_package: Array<Npmvs_Package>;
  /** fetch data from the table: "npmvs.package_tag" */
  npmvs_package_tag: Array<Npmvs_Package_Tag>;
  /** fetch data from the table: "npmvs.package_tag" using primary key columns */
  npmvs_package_tag_by_pk?: Maybe<Npmvs_Package_Tag>;
  /** fetch data from the table in a streaming manner: "npmvs.package_tag" */
  npmvs_package_tag_stream: Array<Npmvs_Package_Tag>;
  /** fetch data from the table: "npmvs.tag" */
  npmvs_tag: Array<Npmvs_Tag>;
  /** fetch data from the table: "npmvs.tag" using primary key columns */
  npmvs_tag_by_pk?: Maybe<Npmvs_Tag>;
  /** fetch data from the table in a streaming manner: "npmvs.tag" */
  npmvs_tag_stream: Array<Npmvs_Tag>;
};


export type Subscription_RootNpmvs_Lucky_PackagesArgs = {
  args: Npmvs_Lucky_Packages_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Subscription_RootNpmvs_Lucky_Packages_AggregateArgs = {
  args: Npmvs_Lucky_Packages_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Subscription_RootNpmvs_Lucky_TagsArgs = {
  args: Npmvs_Lucky_Tags_Args;
  distinct_on?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_PackageArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Bool_Exp>;
};


export type Subscription_RootNpmvs_Package_TagArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Package_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Package_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_Package_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNpmvs_Package_Tag_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Npmvs_Package_Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Npmvs_Package_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_TagArgs = {
  distinct_on?: InputMaybe<Array<Npmvs_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Npmvs_Tag_Order_By>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};


export type Subscription_RootNpmvs_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNpmvs_Tag_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Npmvs_Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Npmvs_Tag_Bool_Exp>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  __typename?: '__Directive';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isRepeatable: Scalars['Boolean'];
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};


/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  Query = 'QUERY',
  /** Location adjacent to a mutation operation. */
  Mutation = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  Subscription = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  Field = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VariableDefinition = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  Schema = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  Scalar = 'SCALAR',
  /** Location adjacent to an object type definition. */
  Object = 'OBJECT',
  /** Location adjacent to a field definition. */
  FieldDefinition = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  Interface = 'INTERFACE',
  /** Location adjacent to a union definition. */
  Union = 'UNION',
  /** Location adjacent to an enum definition. */
  Enum = 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  InputObject = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = 'INPUT_FIELD_DEFINITION'
}

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  __typename?: '__Schema';
  description?: Maybe<Scalars['String']>;
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  specifiedByURL?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

export type IntrospectionQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IntrospectionQueryQuery = { __typename?: 'query_root', __schema: { __typename?: '__Schema', queryType: { __typename?: '__Type', name?: string | null }, mutationType?: { __typename?: '__Type', name?: string | null } | null, subscriptionType?: { __typename?: '__Type', name?: string | null } | null, types: Array<{ __typename?: '__Type', kind: __TypeKind, name?: string | null, description?: string | null, fields?: Array<{ __typename?: '__Field', name: string, description?: string | null, isDeprecated: boolean, deprecationReason?: string | null, args: Array<{ __typename?: '__InputValue', name: string, description?: string | null, defaultValue?: string | null, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null } }>, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null } }> | null, inputFields?: Array<{ __typename?: '__InputValue', name: string, description?: string | null, defaultValue?: string | null, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null } }> | null, interfaces?: Array<{ __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null }> | null, enumValues?: Array<{ __typename?: '__EnumValue', name: string, description?: string | null, isDeprecated: boolean, deprecationReason?: string | null }> | null, possibleTypes?: Array<{ __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null }> | null }>, directives: Array<{ __typename?: '__Directive', name: string, description?: string | null, locations: Array<__DirectiveLocation>, args: Array<{ __typename?: '__InputValue', name: string, description?: string | null, defaultValue?: string | null, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null } }> }> } };

export type FullTypeFragment = { __typename?: '__Type', kind: __TypeKind, name?: string | null, description?: string | null, fields?: Array<{ __typename?: '__Field', name: string, description?: string | null, isDeprecated: boolean, deprecationReason?: string | null, args: Array<{ __typename?: '__InputValue', name: string, description?: string | null, defaultValue?: string | null, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null } }>, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null } }> | null, inputFields?: Array<{ __typename?: '__InputValue', name: string, description?: string | null, defaultValue?: string | null, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null } }> | null, interfaces?: Array<{ __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null }> | null, enumValues?: Array<{ __typename?: '__EnumValue', name: string, description?: string | null, isDeprecated: boolean, deprecationReason?: string | null }> | null, possibleTypes?: Array<{ __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null }> | null };

export type InputValueFragment = { __typename?: '__InputValue', name: string, description?: string | null, defaultValue?: string | null, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null } };

export type TypeRefFragment = { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } | null } | null } | null } | null } | null } | null };
