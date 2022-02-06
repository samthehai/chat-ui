type ConversationMessagesConnectionFragmentFragment = (
  { readonly __typename?: 'ConversationMessagesConnection' }
  & Pick<ConversationMessagesConnection, 'totalCount'>
  & { readonly pageInfo: (
    { readonly __typename?: 'PageInfo' }
    & PageInfoFragmentFragment
  ), readonly edges: ReadonlyArray<(
    { readonly __typename?: 'ConversationMessagesEdge' }
    & ConversationMessagesEdgeFragmentFragment
  )> }
);

type ConversationMessagesEdgeFragmentFragment = (
  { readonly __typename?: 'ConversationMessagesEdge' }
  & Pick<ConversationMessagesEdge, 'cursor'>
  & { readonly node: (
    { readonly __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);

type PageInfoFragmentFragment = (
  { readonly __typename?: 'PageInfo' }
  & Pick<PageInfo, 'startCursor' | 'endCursor' | 'hasPreviousPage' | 'hasNextPage'>
);

type UserFriendsConnectionFragmentFragment = (
  { readonly __typename?: 'UserFriendsConnection' }
  & Pick<UserFriendsConnection, 'totalCount'>
  & { readonly pageInfo: (
    { readonly __typename?: 'PageInfo' }
    & PageInfoFragmentFragment
  ), readonly edges: ReadonlyArray<(
    { readonly __typename?: 'UserFriendsEdge' }
    & UserFriendsEdgeFragmentFragment
  )> }
);

type UserFriendsEdgeFragmentFragment = (
  { readonly __typename?: 'UserFriendsEdge' }
  & Pick<UserFriendsEdge, 'cursor'>
  & { readonly node?: Maybe<(
    { readonly __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

type ConversationFragmentFragment = (
  { readonly __typename?: 'Conversation' }
  & Pick<Conversation, 'id' | 'title' | 'type' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { readonly creator?: Maybe<(
    { readonly __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

type MessageFragmentFragment = (
  { readonly __typename?: 'Message' }
  & Pick<Message, 'id' | 'type' | 'content' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { readonly sender: (
    { readonly __typename?: 'User' }
    & UserFragmentFragment
  ), readonly conversation: (
    { readonly __typename?: 'Conversation' }
    & ConversationFragmentFragment
  ) }
);

type ParticipantFragmentFragment = (
  { readonly __typename?: 'Participant' }
  & Pick<Participant, 'id' | 'createdAt' | 'updatedAt'>
  & { readonly conversation: (
    { readonly __typename?: 'Conversation' }
    & ConversationFragmentFragment
  ), readonly user: (
    { readonly __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

type UserFragmentFragment = (
  { readonly __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'pictureUrl' | 'provider' | 'firebaseId' | 'emailAddress' | 'emailVerified'>
);

type LoginMutationVariables = Exact<{ [key: string]: never; }>;


type LoginMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly login: (
    { readonly __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

type PostMessageMutationVariables = Exact<{
  input: PostMessageInput;
}>;


type PostMessageMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly postMessage: (
    { readonly __typename?: 'PostMessagePayload' }
    & { readonly message: (
      { readonly __typename?: 'Message' }
      & MessageFragmentFragment
    ) }
  ) }
);

type ConversationMessagesQueryVariables = Exact<{
  conversationId: Scalars['ID'];
  first: Scalars['Int'];
  after: Scalars['ID'];
}>;


type ConversationMessagesQuery = (
  { readonly __typename?: 'Query' }
  & { readonly conversationMessages: (
    { readonly __typename?: 'ConversationMessagesConnection' }
    & ConversationMessagesConnectionFragmentFragment
  ) }
);

type FriendsQueryVariables = Exact<{
  first: Scalars['Int'];
  after: Scalars['ID'];
  sortBy: FriendsSortByType;
  sortOrder: SortOrderType;
}>;


type FriendsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly friends: (
    { readonly __typename?: 'UserFriendsConnection' }
    & UserFriendsConnectionFragmentFragment
  ) }
);

type MeQueryVariables = Exact<{ [key: string]: never; }>;


type MeQuery = (
  { readonly __typename?: 'Query' }
  & { readonly me: (
    { readonly __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

type MessagePostedSubscriptionVariables = Exact<{ [key: string]: never; }>;


type MessagePostedSubscription = (
  { readonly __typename?: 'Subscription' }
  & { readonly messagePosted: (
    { readonly __typename?: 'Message' }
    & MessageFragmentFragment
  ) }
);
