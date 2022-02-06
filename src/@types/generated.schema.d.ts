type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
  Uint64: string;
};

type Conversation = {
  readonly __typename?: 'Conversation';
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly creator?: Maybe<User>;
  readonly type: ConversationType;
  readonly createdAt: Scalars['Time'];
  readonly updatedAt: Scalars['Time'];
  readonly deletedAt?: Maybe<Scalars['Time']>;
  readonly messages: ReadonlyArray<Message>;
};

type ConversationMessagesConnection = {
  readonly __typename?: 'ConversationMessagesConnection';
  readonly pageInfo: PageInfo;
  readonly edges: ReadonlyArray<ConversationMessagesEdge>;
  readonly totalCount: Scalars['Int'];
};

type ConversationMessagesEdge = {
  readonly __typename?: 'ConversationMessagesEdge';
  readonly cursor: Scalars['ID'];
  readonly node: Message;
};

type ConversationType =
  | 'SINGLE'
  | 'GROUP';

type CreateNewConversationInput = {
  readonly title: Scalars['String'];
  readonly recipentIdList: ReadonlyArray<Scalars['ID']>;
  readonly text?: Maybe<Scalars['String']>;
};

type CreateNewConversationPayload = {
  readonly __typename?: 'CreateNewConversationPayload';
  readonly conversation: Conversation;
};

type FriendsSortByType =
  | 'FRIENDS_SORT_BY_NAME';

type Message = Node & {
  readonly __typename?: 'Message';
  readonly id: Scalars['ID'];
  readonly sender: User;
  readonly conversation: Conversation;
  readonly type: MessageType;
  readonly content: Scalars['String'];
  readonly createdAt: Scalars['Time'];
  readonly updatedAt: Scalars['Time'];
  readonly deletedAt?: Maybe<Scalars['Time']>;
};

type MessageType =
  | 'TEXT';

type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createNewConversation: CreateNewConversationPayload;
  readonly postMessage: PostMessagePayload;
  readonly login: User;
};


type MutationCreateNewConversationArgs = {
  input: CreateNewConversationInput;
};


type MutationPostMessageArgs = {
  input: PostMessageInput;
};

type Node = {
  readonly id: Scalars['ID'];
};

type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly startCursor: Scalars['ID'];
  readonly endCursor: Scalars['ID'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
};

type Participant = {
  readonly __typename?: 'Participant';
  readonly id: Scalars['ID'];
  readonly conversation: Conversation;
  readonly user: User;
  readonly createdAt: Scalars['Time'];
  readonly updatedAt: Scalars['Time'];
};

type PostMessageInput = {
  readonly conversationId: Scalars['ID'];
  readonly text: Scalars['String'];
};

type PostMessagePayload = {
  readonly __typename?: 'PostMessagePayload';
  readonly message: Message;
};

type Query = {
  readonly __typename?: 'Query';
  readonly me: User;
  readonly conversationMessages: ConversationMessagesConnection;
  readonly friends: UserFriendsConnection;
};


type QueryConversationMessagesArgs = {
  conversationId: Scalars['ID'];
  first: Scalars['Int'];
  after: Scalars['ID'];
};


type QueryFriendsArgs = {
  first: Scalars['Int'];
  after: Scalars['ID'];
  sortBy: FriendsSortByType;
  sortOrder: SortOrderType;
};

type SortOrderType =
  | 'SORT_ORDER_ASC'
  | 'SORT_ORDER_DES';

type Subscription = {
  readonly __typename?: 'Subscription';
  readonly messagePosted: Message;
  readonly userJoined: User;
};



type User = Node & {
  readonly __typename?: 'User';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly pictureUrl: Scalars['String'];
  readonly firebaseId: Scalars['String'];
  readonly provider: Scalars['String'];
  readonly emailAddress: Scalars['String'];
  readonly emailVerified: Scalars['Boolean'];
};

type UserFriendsConnection = {
  readonly __typename?: 'UserFriendsConnection';
  readonly pageInfo: PageInfo;
  readonly edges: ReadonlyArray<UserFriendsEdge>;
  readonly totalCount: Scalars['Int'];
};

type UserFriendsEdge = {
  readonly __typename?: 'UserFriendsEdge';
  readonly cursor: Scalars['ID'];
  readonly node?: Maybe<User>;
};
