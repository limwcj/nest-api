/* tslint:disable */
export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    firstName_ASC = "firstName_ASC",
    firstName_DESC = "firstName_DESC",
    lastName_ASC = "lastName_ASC",
    lastName_DESC = "lastName_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    passwordDigest_ASC = "passwordDigest_ASC",
    passwordDigest_DESC = "passwordDigest_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export abstract class UserCreateInput {
    firstName: string;
    lastName: string;
    email: string;
    passwordDigest: string;
}

export abstract class UserSubscriptionWhereInput {
    AND: UserSubscriptionWhereInput[];
    OR: UserSubscriptionWhereInput[];
    NOT: UserSubscriptionWhereInput[];
    mutation_in: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every: string[];
    updatedFields_contains_some: string[];
    node?: UserWhereInput;
}

export abstract class UserUpdateInput {
    firstName?: string;
    lastName?: string;
    email?: string;
    passwordDigest?: string;
}

export abstract class UserUpdateManyMutationInput {
    firstName?: string;
    lastName?: string;
    email?: string;
    passwordDigest?: string;
}

export abstract class UserWhereInput {
    AND: UserWhereInput[];
    OR: UserWhereInput[];
    NOT: UserWhereInput[];
    id?: string;
    id_not?: string;
    id_in: string[];
    id_not_in: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    firstName?: string;
    firstName_not?: string;
    firstName_in: string[];
    firstName_not_in: string[];
    firstName_lt?: string;
    firstName_lte?: string;
    firstName_gt?: string;
    firstName_gte?: string;
    firstName_contains?: string;
    firstName_not_contains?: string;
    firstName_starts_with?: string;
    firstName_not_starts_with?: string;
    firstName_ends_with?: string;
    firstName_not_ends_with?: string;
    lastName?: string;
    lastName_not?: string;
    lastName_in: string[];
    lastName_not_in: string[];
    lastName_lt?: string;
    lastName_lte?: string;
    lastName_gt?: string;
    lastName_gte?: string;
    lastName_contains?: string;
    lastName_not_contains?: string;
    lastName_starts_with?: string;
    lastName_not_starts_with?: string;
    lastName_ends_with?: string;
    lastName_not_ends_with?: string;
    email?: string;
    email_not?: string;
    email_in: string[];
    email_not_in: string[];
    email_lt?: string;
    email_lte?: string;
    email_gt?: string;
    email_gte?: string;
    email_contains?: string;
    email_not_contains?: string;
    email_starts_with?: string;
    email_not_starts_with?: string;
    email_ends_with?: string;
    email_not_ends_with?: string;
    passwordDigest?: string;
    passwordDigest_not?: string;
    passwordDigest_in: string[];
    passwordDigest_not_in: string[];
    passwordDigest_lt?: string;
    passwordDigest_lte?: string;
    passwordDigest_gt?: string;
    passwordDigest_gte?: string;
    passwordDigest_contains?: string;
    passwordDigest_not_contains?: string;
    passwordDigest_starts_with?: string;
    passwordDigest_not_starts_with?: string;
    passwordDigest_ends_with?: string;
    passwordDigest_not_ends_with?: string;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in: DateTime[];
    createdAt_not_in: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in: DateTime[];
    updatedAt_not_in: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export abstract class UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export interface Node {
    id: string;
}

export abstract class AggregateUser {
    count: number;
}

export abstract class BatchPayload {
    count: Long;
}

export abstract class IMutation {
    abstract createUser(data: UserCreateInput): User | Promise<User>;
    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
}

export abstract class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    abstract user(where: UserWhereUniqueInput): User | Promise<User>;
    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    abstract node(id: string): Node | Promise<Node>;
    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
}

export abstract class User implements Node {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordDigest: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export abstract class UserConnection {
    pageInfo: PageInfo;
    edges?: UserEdge[];
    aggregate: AggregateUser;
}

export abstract class UserEdge {
    node: User;
    cursor: string;
}

export abstract class UserPreviousValues {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordDigest: string;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export abstract class UserSubscriptionPayload {
    mutation: MutationType;
    node?: User;
    updatedFields: string[];
    previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Long = any;
