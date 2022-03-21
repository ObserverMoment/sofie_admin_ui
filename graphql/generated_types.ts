import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type AddDocumentToSkillInput = {
  id: Scalars['ID'];
  uri: Scalars['String'];
};

export type AddWorkoutPlanToClubInput = {
  WorkoutPlan: ConnectRelationInput;
  id: Scalars['ID'];
};

export type AddWorkoutPlanToCollectionInput = {
  WorkoutPlan: ConnectRelationInput;
  collectionId: Scalars['ID'];
};

export type AddWorkoutToClubInput = {
  Workout: ConnectRelationInput;
  id: Scalars['ID'];
};

export type AddWorkoutToCollectionInput = {
  Workout: ConnectRelationInput;
  collectionId: Scalars['ID'];
};

export type AnnouncementUpdate = {
  __typename?: 'AnnouncementUpdate';
  actions: Array<AnnouncementUpdateAction>;
  articleUrl?: Maybe<Scalars['String']>;
  audioUri?: Maybe<Scalars['String']>;
  bodyOne?: Maybe<Scalars['String']>;
  bodyTwo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUri?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  videoUri?: Maybe<Scalars['String']>;
};

export type AnnouncementUpdateAction = {
  __typename?: 'AnnouncementUpdateAction';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  routeTo: Scalars['String'];
  text: Scalars['String'];
};

export type BestBenchmarkScoreSummary = {
  __typename?: 'BestBenchmarkScoreSummary';
  benchmarkName: Scalars['String'];
  benchmarkType: FitnessBenchmarkScoreType;
  bestScore: Scalars['Float'];
  videoUri?: Maybe<Scalars['String']>;
};

export type BodyArea = {
  __typename?: 'BodyArea';
  altNames?: Maybe<Scalars['String']>;
  frontBack: BodyAreaFrontBack;
  id: Scalars['ID'];
  name: Scalars['String'];
  upperLower: BodyAreaUpperLower;
};

/** Enums */
export enum BodyAreaFrontBack {
  Back = 'BACK',
  Both = 'BOTH',
  Front = 'FRONT'
}

export type BodyAreaMoveScore = {
  __typename?: 'BodyAreaMoveScore';
  BodyArea: BodyArea;
  score: Scalars['Int'];
};

export type BodyAreaMoveScoreInput = {
  BodyArea: ConnectRelationInput;
  score: Scalars['Float'];
};

export enum BodyAreaUpperLower {
  Core = 'CORE',
  Lower = 'LOWER',
  Upper = 'UPPER'
}

export type BodyTrackingEntry = {
  __typename?: 'BodyTrackingEntry';
  bodyweight?: Maybe<Scalars['Float']>;
  bodyweightUnit?: Maybe<BodyweightUnit>;
  createdAt: Scalars['DateTime'];
  fatPercent?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  photoUris: Array<Scalars['String']>;
};

export enum BodyweightUnit {
  Kg = 'KG',
  Lb = 'LB'
}

export type CheckClubInviteTokenResult = ClubInviteTokenData | InviteTokenError;

export type Club = {
  __typename?: 'Club';
  Admins: Array<UserAvatarData>;
  ClubInviteTokens?: Maybe<Array<ClubInviteToken>>;
  Members: Array<UserAvatarData>;
  Owner: UserAvatarData;
  WorkoutPlans?: Maybe<Array<WorkoutPlanSummary>>;
  Workouts?: Maybe<Array<WorkoutSummary>>;
  contentAccessScope: ContentAccessScope;
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ClubChatSummary = {
  __typename?: 'ClubChatSummary';
  Admins: Array<UserAvatarData>;
  Members: Array<UserAvatarData>;
  Owner: UserAvatarData;
  coverImageUri?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ClubInviteToken = {
  __typename?: 'ClubInviteToken';
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  inviteLimit: Scalars['Int'];
  joinedUserIds: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type ClubInviteTokenData = {
  __typename?: 'ClubInviteTokenData';
  Club: ClubSummary;
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type ClubInviteTokens = {
  __typename?: 'ClubInviteTokens';
  id: Scalars['ID'];
  tokens: Array<ClubInviteToken>;
};

export type ClubMemberNote = {
  __typename?: 'ClubMemberNote';
  User?: Maybe<UserAvatarData>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  note: Scalars['String'];
  tags: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ClubMemberSummary = {
  __typename?: 'ClubMemberSummary';
  avatarUri?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  id: Scalars['ID'];
  skills: Array<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
};

export type ClubMembers = {
  __typename?: 'ClubMembers';
  Admins: Array<ClubMemberSummary>;
  Members: Array<ClubMemberSummary>;
  Owner: ClubMemberSummary;
  id: Scalars['ID'];
};

export type ClubSummary = {
  __typename?: 'ClubSummary';
  Admins: Array<UserAvatarData>;
  Owner: UserAvatarData;
  contentAccessScope: ContentAccessScope;
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  memberCount: Scalars['Int'];
  name: Scalars['String'];
  planCount: Scalars['Int'];
  workoutCount: Scalars['Int'];
};

export type ClubWithMetaDataAdmin = {
  __typename?: 'ClubWithMetaDataAdmin';
  Admins: Array<UserAvatarData>;
  ClubInviteTokens?: Maybe<Array<ClubInviteToken>>;
  Members: Array<UserAvatarData>;
  Owner: UserAvatarData;
  WorkoutPlans?: Maybe<Array<WorkoutPlanSummary>>;
  Workouts?: Maybe<Array<WorkoutSummary>>;
  contentAccessScope: ContentAccessScope;
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  metaTags: Array<Scalars['String']>;
  name: Scalars['String'];
  reasonNotValidated?: Maybe<Scalars['String']>;
  validated: PublicContentValidationStatus;
};

export type ClubWorkoutPlans = {
  __typename?: 'ClubWorkoutPlans';
  id: Scalars['ID'];
  workoutPlans: Array<WorkoutPlanSummary>;
};

export type ClubWorkouts = {
  __typename?: 'ClubWorkouts';
  id: Scalars['ID'];
  workouts: Array<WorkoutSummary>;
};

export type Collection = {
  __typename?: 'Collection';
  WorkoutPlans: Array<WorkoutPlanSummary>;
  Workouts: Array<WorkoutSummary>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CompletedWorkoutPlanDayWorkout = {
  __typename?: 'CompletedWorkoutPlanDayWorkout';
  id: Scalars['ID'];
  loggedWorkoutId: Scalars['ID'];
  workoutPlanDayWorkoutId: Scalars['ID'];
};

export type ConnectRelationInput = {
  id: Scalars['ID'];
};

export enum ContentAccessScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CopyWorkoutPlanDayToAnotherDayInput = {
  copyToDay: Scalars['Int'];
  id: Scalars['ID'];
};

export type CoreData = {
  __typename?: 'CoreData';
  bodyAreas: Array<BodyArea>;
  equipment: Array<Equipment>;
  fitnessBenchmarkCategories: Array<FitnessBenchmarkCategory>;
  moveTypes: Array<MoveType>;
  progressWidgets: Array<ProgressWidget>;
  standardMoves: Array<Move>;
  workoutGoals: Array<WorkoutGoal>;
  workoutSectionTypes: Array<WorkoutSectionType>;
};

export type CreateBodyTrackingEntryInput = {
  bodyweight?: InputMaybe<Scalars['Float']>;
  bodyweightUnit?: InputMaybe<BodyweightUnit>;
  fatPercent?: InputMaybe<Scalars['Float']>;
  note?: InputMaybe<Scalars['String']>;
  photoUris?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateClubInput = {
  description?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateClubInviteTokenInput = {
  clubId: Scalars['ID'];
  inviteLimit: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateClubMemberNoteInput = {
  clubId: Scalars['ID'];
  memberId: Scalars['ID'];
  note: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type CreateCollectionInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateCompletedWorkoutPlanDayWorkoutInput = {
  loggedWorkoutId: Scalars['ID'];
  workoutPlanDayWorkoutId: Scalars['ID'];
  workoutPlanEnrolmentId: Scalars['ID'];
};

export type CreateEquipmentInput = {
  altNames?: InputMaybe<Scalars['String']>;
  loadAdjustable: Scalars['Boolean'];
  name: Scalars['String'];
};

export type CreateFitnessBenchmarkInput = {
  FitnessBenchmarkCategory: ConnectRelationInput;
  description?: InputMaybe<Scalars['String']>;
  instructionalVideoThumbUri?: InputMaybe<Scalars['String']>;
  instructionalVideoUri?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  scope: FitnessBenchmarkScope;
  type: FitnessBenchmarkScoreType;
};

export type CreateFitnessBenchmarkScoreInput = {
  FitnessBenchmark: ConnectRelationInput;
  completedOn: Scalars['DateTime'];
  note?: InputMaybe<Scalars['String']>;
  score: Scalars['Float'];
  videoThumbUri?: InputMaybe<Scalars['String']>;
  videoUri?: InputMaybe<Scalars['String']>;
};

export type CreateFitnessBenchmarkWorkoutInput = {
  FitnessBenchmarkWorkout: ConnectRelationInput;
  completedOn: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  instructionalVideoThumbUri?: InputMaybe<Scalars['String']>;
  instructionalVideoUri?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Scalars['String']>;
  moveDescriptions: Array<Scalars['String']>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  pointsForMoveCompleted: Array<Scalars['Int']>;
  rounds: Scalars['Int'];
  scope: FitnessBenchmarkScope;
  score: Scalars['Int'];
  type: FitnessBenchmarkWorkoutScoreType;
};

export type CreateGymProfileInput = {
  Equipments?: InputMaybe<Array<ConnectRelationInput>>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateLoggedWorkoutInput = {
  GymProfile?: InputMaybe<ConnectRelationInput>;
  LoggedWorkoutSections: Array<CreateLoggedWorkoutSectionInLoggedWorkoutInput>;
  ScheduledWorkout?: InputMaybe<ConnectRelationInput>;
  Workout?: InputMaybe<ConnectRelationInput>;
  WorkoutGoals: Array<ConnectRelationInput>;
  WorkoutPlanDayWorkout?: InputMaybe<ConnectRelationInput>;
  WorkoutPlanEnrolment?: InputMaybe<ConnectRelationInput>;
  completedOn: Scalars['DateTime'];
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
};

export type CreateLoggedWorkoutMoveInLoggedWorkoutSetInput = {
  Equipment?: InputMaybe<ConnectRelationInput>;
  Move: ConnectRelationInput;
  distanceUnit?: InputMaybe<DistanceUnit>;
  loadAmount?: InputMaybe<Scalars['Float']>;
  loadUnit?: InputMaybe<LoadUnit>;
  repType: WorkoutMoveRepType;
  reps: Scalars['Float'];
  sortPosition: Scalars['Int'];
  timeUnit?: InputMaybe<TimeUnit>;
};

export type CreateLoggedWorkoutSectionInLoggedWorkoutInput = {
  LoggedWorkoutSets: Array<CreateLoggedWorkoutSetInLoggedWorkoutSectionInput>;
  WorkoutSectionType: ConnectRelationInput;
  name?: InputMaybe<Scalars['String']>;
  repScore?: InputMaybe<Scalars['Int']>;
  sortPosition: Scalars['Int'];
  timeTakenSeconds: Scalars['Int'];
};

export type CreateLoggedWorkoutSetInLoggedWorkoutSectionInput = {
  LoggedWorkoutMoves: Array<CreateLoggedWorkoutMoveInLoggedWorkoutSetInput>;
  sectionRoundNumber: Scalars['Int'];
  sortPosition: Scalars['Int'];
  timeTakenSeconds?: InputMaybe<Scalars['Int']>;
};

export type CreateMoveInput = {
  BodyAreaMoveScores?: InputMaybe<Array<BodyAreaMoveScoreInput>>;
  MoveType: ConnectRelationInput;
  RequiredEquipments?: InputMaybe<Array<ConnectRelationInput>>;
  SelectableEquipments?: InputMaybe<Array<ConnectRelationInput>>;
  demoVideoThumbUri?: InputMaybe<Scalars['String']>;
  demoVideoUri?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  scope?: InputMaybe<MoveScope>;
  searchTerms?: InputMaybe<Scalars['String']>;
  validRepTypes: Array<WorkoutMoveRepType>;
};

export type CreateScheduleForPlanEnrolmentInput = {
  startDate: Scalars['DateTime'];
  workoutPlanEnrolmentId: Scalars['ID'];
};

export type CreateScheduledWorkoutInput = {
  GymProfile?: InputMaybe<ConnectRelationInput>;
  Workout: ConnectRelationInput;
  WorkoutPlanDayWorkout?: InputMaybe<ConnectRelationInput>;
  WorkoutPlanEnrolment?: InputMaybe<ConnectRelationInput>;
  note?: InputMaybe<Scalars['String']>;
  scheduledAt: Scalars['DateTime'];
};

export type CreateSkillInput = {
  experience?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateStreamFeedActivityExtraDataInput = {
  articleUrl?: InputMaybe<Scalars['String']>;
  audioUrl?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  creator?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  originalPostId?: InputMaybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
};

export type CreateStreamFeedActivityInput = {
  actor: Scalars['String'];
  extraData: CreateStreamFeedActivityExtraDataInput;
  object: Scalars['String'];
  verb: Scalars['String'];
};

export type CreateUserDayLogMoodInput = {
  energyScore: Scalars['Int'];
  moodScore: Scalars['Int'];
  note?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateUserEatWellLogInput = {
  dayNumber: Scalars['Int'];
  note?: InputMaybe<Scalars['String']>;
  rating: UserDayLogRating;
  year: Scalars['Int'];
};

export type CreateUserExerciseLoadTrackerInput = {
  Equipment?: InputMaybe<ConnectRelationInput>;
  Move: ConnectRelationInput;
  loadUnit: LoadUnit;
  reps: Scalars['Int'];
};

export type CreateUserGoalInput = {
  deadline?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateUserMeditationLogInput = {
  dayNumber: Scalars['Int'];
  minutesLogged: Scalars['Int'];
  note?: InputMaybe<Scalars['String']>;
  year: Scalars['Int'];
};

export type CreateUserSleepWellLogInput = {
  dayNumber: Scalars['Int'];
  minutesSlept?: InputMaybe<Scalars['Int']>;
  note?: InputMaybe<Scalars['String']>;
  rating: UserDayLogRating;
  year: Scalars['Int'];
};

export type CreateWorkoutInput = {
  contentAccessScope: ContentAccessScope;
  name: Scalars['String'];
};

export type CreateWorkoutMoveInSetInput = {
  Equipment?: InputMaybe<ConnectRelationInput>;
  Move: ConnectRelationInput;
  distanceUnit?: InputMaybe<DistanceUnit>;
  loadAmount: Scalars['Float'];
  loadUnit?: InputMaybe<LoadUnit>;
  repType: WorkoutMoveRepType;
  reps: Scalars['Float'];
  sortPosition: Scalars['Int'];
  timeUnit?: InputMaybe<TimeUnit>;
};

export type CreateWorkoutMoveInput = {
  Equipment?: InputMaybe<ConnectRelationInput>;
  Move: ConnectRelationInput;
  WorkoutSet: ConnectRelationInput;
  distanceUnit?: InputMaybe<DistanceUnit>;
  loadAmount: Scalars['Float'];
  loadUnit?: InputMaybe<LoadUnit>;
  repType: WorkoutMoveRepType;
  reps: Scalars['Float'];
  sortPosition: Scalars['Int'];
  timeUnit?: InputMaybe<TimeUnit>;
};

export type CreateWorkoutPlanDayWithWorkoutInput = {
  Workout: ConnectRelationInput;
  WorkoutPlan: ConnectRelationInput;
  dayNumber: Scalars['Int'];
};

export type CreateWorkoutPlanDayWorkoutInput = {
  Workout: ConnectRelationInput;
  WorkoutPlanDay: ConnectRelationInput;
  note?: InputMaybe<Scalars['String']>;
  sortPosition: Scalars['Int'];
};

export type CreateWorkoutPlanInput = {
  contentAccessScope: ContentAccessScope;
  name: Scalars['String'];
};

export type CreateWorkoutPlanReviewInput = {
  WorkoutPlan: ConnectRelationInput;
  comment?: InputMaybe<Scalars['String']>;
  score: Scalars['Float'];
};

export type CreateWorkoutSectionInput = {
  Workout: ConnectRelationInput;
  WorkoutSectionType: ConnectRelationInput;
  classAudioUri?: InputMaybe<Scalars['String']>;
  classVideoThumbUri?: InputMaybe<Scalars['String']>;
  classVideoUri?: InputMaybe<Scalars['String']>;
  introAudioUri?: InputMaybe<Scalars['String']>;
  introVideoThumbUri?: InputMaybe<Scalars['String']>;
  introVideoUri?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  rounds?: InputMaybe<Scalars['Int']>;
  sortPosition: Scalars['Int'];
  timecap?: InputMaybe<Scalars['Int']>;
};

export type CreateWorkoutSetInput = {
  WorkoutSection: ConnectRelationInput;
  duration?: InputMaybe<Scalars['Int']>;
  sortPosition: Scalars['Int'];
};

export type CreateWorkoutSetWithWorkoutMovesInput = {
  workoutMoves: Array<CreateWorkoutMoveInSetInput>;
  workoutSet: CreateWorkoutSetInput;
};

export type CreateWorkoutTagInput = {
  tag: Scalars['String'];
};

export type DeleteClubInviteTokenInput = {
  clubId: Scalars['ID'];
  tokenId: Scalars['ID'];
};

export type DeleteCompletedWorkoutPlanDayWorkoutInput = {
  workoutPlanDayWorkoutId: Scalars['ID'];
  workoutPlanEnrolmentId: Scalars['ID'];
};

export enum DifficultyLevel {
  Advanced = 'ADVANCED',
  Challenging = 'CHALLENGING',
  Elite = 'ELITE',
  Intermediate = 'INTERMEDIATE',
  Light = 'LIGHT'
}

export enum DistanceUnit {
  Kilometres = 'KILOMETRES',
  Metres = 'METRES',
  Miles = 'MILES',
  Yards = 'YARDS'
}

export type Equipment = {
  __typename?: 'Equipment';
  altNames?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  loadAdjustable: Scalars['Boolean'];
  name: Scalars['String'];
};

export type FitnessBenchmark = {
  __typename?: 'FitnessBenchmark';
  FitnessBenchmarkCategory: FitnessBenchmarkCategory;
  FitnessBenchmarkScores?: Maybe<Array<FitnessBenchmarkScore>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instructionalVideoThumbUri?: Maybe<Scalars['String']>;
  instructionalVideoUri?: Maybe<Scalars['String']>;
  instructions?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  scope: FitnessBenchmarkScope;
  type: FitnessBenchmarkScoreType;
};

export type FitnessBenchmarkCategory = {
  __typename?: 'FitnessBenchmarkCategory';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum FitnessBenchmarkScope {
  Custom = 'CUSTOM',
  Standard = 'STANDARD'
}

export type FitnessBenchmarkScore = {
  __typename?: 'FitnessBenchmarkScore';
  completedOn: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  score: Scalars['Float'];
  videoThumbUri?: Maybe<Scalars['String']>;
  videoUri?: Maybe<Scalars['String']>;
};

export enum FitnessBenchmarkScoreType {
  Fastesttimedistance = 'FASTESTTIMEDISTANCE',
  Fastesttimereps = 'FASTESTTIMEREPS',
  Longestdistance = 'LONGESTDISTANCE',
  Maxload = 'MAXLOAD',
  Timedmaxreps = 'TIMEDMAXREPS',
  Unbrokenmaxreps = 'UNBROKENMAXREPS',
  Unbrokenmaxtime = 'UNBROKENMAXTIME'
}

export type FitnessBenchmarkWorkout = {
  __typename?: 'FitnessBenchmarkWorkout';
  FitnessBenchmarkWorkoutScores?: Maybe<Array<FitnessBenchmarkWorkoutScore>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instructionalVideoThumbUri?: Maybe<Scalars['String']>;
  instructionalVideoUri?: Maybe<Scalars['String']>;
  instructions?: Maybe<Scalars['String']>;
  moveDescriptions: Array<Scalars['String']>;
  name: Scalars['String'];
  pointsForMoveCompleted: Array<Scalars['Int']>;
  rounds: Scalars['Int'];
  scope: FitnessBenchmarkScope;
  type: FitnessBenchmarkWorkoutScoreType;
};

export type FitnessBenchmarkWorkoutScore = {
  __typename?: 'FitnessBenchmarkWorkoutScore';
  completedOn: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  score: Scalars['Int'];
};

export enum FitnessBenchmarkWorkoutScoreType {
  Amrap = 'AMRAP',
  Fortime = 'FORTIME'
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Nonbinary = 'NONBINARY',
  Pnts = 'PNTS'
}

export type GymProfile = {
  __typename?: 'GymProfile';
  Equipments: Array<Equipment>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type InviteTokenError = {
  __typename?: 'InviteTokenError';
  message: Scalars['String'];
};

export enum JoinClubRequestStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type LifetimeLogStatsSummary = {
  __typename?: 'LifetimeLogStatsSummary';
  minutesWorked: Scalars['Int'];
  sessionsLogged: Scalars['Int'];
};

export enum LoadUnit {
  Bodyweightpercent = 'BODYWEIGHTPERCENT',
  Kg = 'KG',
  Lb = 'LB',
  Percentmax = 'PERCENTMAX'
}

export type LoggedWorkout = {
  __typename?: 'LoggedWorkout';
  GymProfile?: Maybe<GymProfile>;
  LoggedWorkoutSections: Array<LoggedWorkoutSection>;
  User?: Maybe<UserAvatarData>;
  WorkoutGoals: Array<WorkoutGoal>;
  completedOn: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  workoutId?: Maybe<Scalars['ID']>;
};

export type LoggedWorkoutMove = {
  __typename?: 'LoggedWorkoutMove';
  Equipment?: Maybe<Equipment>;
  Move: Move;
  distanceUnit: DistanceUnit;
  id: Scalars['ID'];
  loadAmount: Scalars['Float'];
  loadUnit: LoadUnit;
  repType: WorkoutMoveRepType;
  reps: Scalars['Float'];
  sortPosition: Scalars['Int'];
  timeUnit: TimeUnit;
};

export type LoggedWorkoutSection = {
  __typename?: 'LoggedWorkoutSection';
  LoggedWorkoutSets: Array<LoggedWorkoutSet>;
  WorkoutSectionType: WorkoutSectionType;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  repScore?: Maybe<Scalars['Int']>;
  sortPosition: Scalars['Int'];
  timeTakenSeconds: Scalars['Int'];
};

export type LoggedWorkoutSet = {
  __typename?: 'LoggedWorkoutSet';
  LoggedWorkoutMoves: Array<LoggedWorkoutMove>;
  id: Scalars['ID'];
  sectionRoundNumber: Scalars['Int'];
  sortPosition: Scalars['Int'];
  timeTakenSeconds?: Maybe<Scalars['Int']>;
};

export type MarkAnnouncementUpdateAsSeenInput = {
  announcementUpdateId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type MarkWelcomeTodoItemAsSeenInput = {
  userId: Scalars['ID'];
  welcomeTodoItemId: Scalars['ID'];
};

export type Move = {
  __typename?: 'Move';
  BodyAreaMoveScores: Array<BodyAreaMoveScore>;
  MoveType: MoveType;
  RequiredEquipments: Array<Equipment>;
  SelectableEquipments: Array<Equipment>;
  archived: Scalars['Boolean'];
  demoVideoThumbUri?: Maybe<Scalars['String']>;
  demoVideoUri?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  scope: MoveScope;
  searchTerms?: Maybe<Scalars['String']>;
  validRepTypes: Array<WorkoutMoveRepType>;
};

/**
 * Standard moves are built in / official.
 * Custom moves are created by users.
 */
export enum MoveScope {
  Custom = 'CUSTOM',
  Standard = 'STANDARD'
}

export type MoveType = {
  __typename?: 'MoveType';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUri?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type MoveWorkoutPlanDayToAnotherDayInput = {
  id: Scalars['ID'];
  moveToDay: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDocumentToSkill: Skill;
  addUserToClubViaInviteToken: Scalars['ID'];
  addWorkoutPlanToClub: ClubWorkoutPlans;
  addWorkoutPlanToCollection: Collection;
  addWorkoutToClub: ClubWorkouts;
  addWorkoutToCollection: Collection;
  archiveCustomMoveById: Move;
  archiveWorkoutById: Workout;
  archiveWorkoutPlanById: WorkoutPlan;
  clearScheduleForPlanEnrolment: WorkoutPlanEnrolment;
  clearWorkoutPlanEnrolmentProgress: WorkoutPlanEnrolment;
  copyWorkoutPlanDayToAnotherDay: WorkoutPlanDay;
  createBodyTrackingEntry: BodyTrackingEntry;
  createClub: ClubSummary;
  createClubInviteToken: ClubInviteTokens;
  createClubMemberNote: ClubMemberNote;
  createClubMembersFeedPost: StreamEnrichedActivity;
  createCollection: Collection;
  createCompletedWorkoutPlanDayWorkout: WorkoutPlanEnrolment;
  createEquipment?: Maybe<Equipment>;
  createFitnessBenchmark: FitnessBenchmark;
  createFitnessBenchmarkScore: FitnessBenchmark;
  createFitnessBenchmarkWorkout: FitnessBenchmarkWorkout;
  createGymProfile: GymProfile;
  createLoggedWorkout: LoggedWorkout;
  createMove: Move;
  createScheduleForPlanEnrolment: WorkoutPlanEnrolment;
  createScheduledWorkout: ScheduledWorkout;
  createSkill: Skill;
  createUserDayLogMood: UserDayLogMood;
  createUserEatWellLog: UserEatWellLog;
  createUserExerciseLoadTracker: UserExerciseLoadTracker;
  createUserGoal: UserGoal;
  createUserMeditationLog: UserMeditationLog;
  createUserSleepWellLog: UserSleepWellLog;
  createWorkout: Workout;
  createWorkoutMove: WorkoutMove;
  createWorkoutPlan: WorkoutPlan;
  createWorkoutPlanDayWithWorkout: WorkoutPlanDay;
  createWorkoutPlanDayWorkout: WorkoutPlanDayWorkout;
  createWorkoutPlanEnrolment: WorkoutPlanEnrolmentWithPlan;
  createWorkoutPlanReview: WorkoutPlanReview;
  createWorkoutSection: WorkoutSection;
  createWorkoutSet: WorkoutSet;
  createWorkoutSetWithWorkoutMoves: WorkoutSet;
  createWorkoutTag: WorkoutTag;
  deleteBodyTrackingEntryById: Scalars['ID'];
  deleteClub: Scalars['ID'];
  deleteClubInviteToken: ClubInviteTokens;
  deleteClubMembersFeedPost: Scalars['ID'];
  deleteCollectionById: Scalars['ID'];
  deleteCompletedWorkoutPlanDayWorkout: WorkoutPlanEnrolment;
  deleteFitnessBenchmark: Scalars['ID'];
  deleteFitnessBenchmarkScore: FitnessBenchmark;
  deleteFitnessBenchmarkWorkout: Scalars['ID'];
  deleteGymProfileById?: Maybe<Scalars['ID']>;
  deleteLoggedWorkoutById: Scalars['ID'];
  deleteLoggedWorkoutMove: Scalars['ID'];
  deleteScheduledWorkoutById: Scalars['ID'];
  deleteSkillById: Scalars['ID'];
  deleteUserDayLogMood: Scalars['ID'];
  deleteUserExerciseLoadTracker: Scalars['ID'];
  deleteUserGoal: Scalars['ID'];
  deleteWorkoutMoveById: Scalars['ID'];
  deleteWorkoutPlanDayWorkoutById: Scalars['ID'];
  deleteWorkoutPlanDaysById: Array<Scalars['ID']>;
  deleteWorkoutPlanEnrolmentById: Scalars['ID'];
  deleteWorkoutPlanReviewById: Scalars['ID'];
  deleteWorkoutSectionById: Scalars['ID'];
  deleteWorkoutSetById: Scalars['ID'];
  deleteWorkoutTagById: Scalars['ID'];
  duplicateWorkoutById: Workout;
  duplicateWorkoutMoveById: WorkoutMove;
  duplicateWorkoutSetById: WorkoutSet;
  giveMemberAdminStatus: ClubMembers;
  makeCopyWorkoutById: Workout;
  markAnnouncementUpdateAsSeen: Scalars['ID'];
  markWelcomeTodoItemAsSeen: Scalars['ID'];
  moveWorkoutPlanDayToAnotherDay: WorkoutPlanDay;
  removeDocumentFromSkill: Skill;
  removeMemberAdminStatus: ClubMembers;
  removeUserFromClub: ClubMembers;
  removeWorkoutFromClub: ClubWorkouts;
  removeWorkoutFromCollection: Collection;
  removeWorkoutPlanFromClub: ClubWorkoutPlans;
  removeWorkoutPlanFromCollection: Collection;
  reorderWorkoutMoves: Array<SortPositionUpdated>;
  reorderWorkoutPlanDayWorkouts: Array<SortPositionUpdated>;
  reorderWorkoutSections: Array<SortPositionUpdated>;
  reorderWorkoutSets: Array<SortPositionUpdated>;
  softDeleteMoveById: Scalars['ID'];
  softDeleteWorkoutPlanById: Scalars['ID'];
  unarchiveCustomMoveById: Move;
  unarchiveWorkoutById: Workout;
  unarchiveWorkoutPlanById: WorkoutPlan;
  updateBodyTrackingEntry: BodyTrackingEntry;
  updateClubInviteToken: ClubInviteTokens;
  updateClubMemberNote: ClubMemberNote;
  updateClubMetaDataAdmin: ClubWithMetaDataAdmin;
  updateClubSummary: ClubSummary;
  updateCollection: Collection;
  updateEquipment?: Maybe<Equipment>;
  updateFitnessBenchmark: FitnessBenchmark;
  updateFitnessBenchmarkScore: FitnessBenchmark;
  updateFitnessBenchmarkWorkout: FitnessBenchmarkWorkout;
  updateGymProfile: GymProfile;
  updateLoggedWorkout: LoggedWorkout;
  updateLoggedWorkoutMove: LoggedWorkoutMove;
  updateLoggedWorkoutSection: LoggedWorkoutSection;
  updateLoggedWorkoutSet: LoggedWorkoutSet;
  updateMove: Move;
  updateScheduledWorkout: ScheduledWorkout;
  updateSkill: Skill;
  updateUserEatWellLog: UserEatWellLog;
  updateUserGoal: UserGoal;
  updateUserMeditationLog: UserMeditationLog;
  updateUserProfile: UpdateUserProfileResult;
  updateUserSleepWellLog: UserSleepWellLog;
  updateWorkout: Workout;
  updateWorkoutMetaDataAdmin: WorkoutWithMetaDataAdmin;
  updateWorkoutMove: WorkoutMove;
  updateWorkoutMoves: Array<WorkoutMove>;
  updateWorkoutPlan: WorkoutPlan;
  updateWorkoutPlanDay: WorkoutPlanDay;
  updateWorkoutPlanDayWorkout: WorkoutPlanDayWorkout;
  updateWorkoutPlanMetaDataAdmin?: Maybe<WorkoutPlanWithMetaDataAdmin>;
  updateWorkoutPlanReview: WorkoutPlanReview;
  updateWorkoutSection: WorkoutSection;
  updateWorkoutSet: WorkoutSet;
  updateWorkoutTag: WorkoutTag;
  userJoinPublicClub: Scalars['ID'];
};


export type MutationAddDocumentToSkillArgs = {
  data: AddDocumentToSkillInput;
};


export type MutationAddUserToClubViaInviteTokenArgs = {
  clubInviteTokenId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationAddWorkoutPlanToClubArgs = {
  clubId: Scalars['ID'];
  workoutPlanId: Scalars['ID'];
};


export type MutationAddWorkoutPlanToCollectionArgs = {
  data: AddWorkoutPlanToCollectionInput;
};


export type MutationAddWorkoutToClubArgs = {
  clubId: Scalars['ID'];
  workoutId: Scalars['ID'];
};


export type MutationAddWorkoutToCollectionArgs = {
  data: AddWorkoutToCollectionInput;
};


export type MutationArchiveCustomMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationArchiveWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationArchiveWorkoutPlanByIdArgs = {
  id: Scalars['ID'];
};


export type MutationClearScheduleForPlanEnrolmentArgs = {
  enrolmentId: Scalars['ID'];
};


export type MutationClearWorkoutPlanEnrolmentProgressArgs = {
  enrolmentId: Scalars['ID'];
};


export type MutationCopyWorkoutPlanDayToAnotherDayArgs = {
  data: CopyWorkoutPlanDayToAnotherDayInput;
};


export type MutationCreateBodyTrackingEntryArgs = {
  data: CreateBodyTrackingEntryInput;
};


export type MutationCreateClubArgs = {
  data: CreateClubInput;
};


export type MutationCreateClubInviteTokenArgs = {
  data: CreateClubInviteTokenInput;
};


export type MutationCreateClubMemberNoteArgs = {
  data: CreateClubMemberNoteInput;
};


export type MutationCreateClubMembersFeedPostArgs = {
  clubId: Scalars['ID'];
  data: CreateStreamFeedActivityInput;
};


export type MutationCreateCollectionArgs = {
  data: CreateCollectionInput;
};


export type MutationCreateCompletedWorkoutPlanDayWorkoutArgs = {
  data: CreateCompletedWorkoutPlanDayWorkoutInput;
};


export type MutationCreateEquipmentArgs = {
  data: CreateEquipmentInput;
};


export type MutationCreateFitnessBenchmarkArgs = {
  data: CreateFitnessBenchmarkInput;
};


export type MutationCreateFitnessBenchmarkScoreArgs = {
  data: CreateFitnessBenchmarkScoreInput;
};


export type MutationCreateFitnessBenchmarkWorkoutArgs = {
  data: CreateFitnessBenchmarkWorkoutInput;
};


export type MutationCreateGymProfileArgs = {
  data: CreateGymProfileInput;
};


export type MutationCreateLoggedWorkoutArgs = {
  data: CreateLoggedWorkoutInput;
};


export type MutationCreateMoveArgs = {
  data: CreateMoveInput;
};


export type MutationCreateScheduleForPlanEnrolmentArgs = {
  data: CreateScheduleForPlanEnrolmentInput;
};


export type MutationCreateScheduledWorkoutArgs = {
  data: CreateScheduledWorkoutInput;
};


export type MutationCreateSkillArgs = {
  data: CreateSkillInput;
};


export type MutationCreateUserDayLogMoodArgs = {
  data: CreateUserDayLogMoodInput;
};


export type MutationCreateUserEatWellLogArgs = {
  data: CreateUserEatWellLogInput;
};


export type MutationCreateUserExerciseLoadTrackerArgs = {
  data: CreateUserExerciseLoadTrackerInput;
};


export type MutationCreateUserGoalArgs = {
  data: CreateUserGoalInput;
};


export type MutationCreateUserMeditationLogArgs = {
  data: CreateUserMeditationLogInput;
};


export type MutationCreateUserSleepWellLogArgs = {
  data: CreateUserSleepWellLogInput;
};


export type MutationCreateWorkoutArgs = {
  data: CreateWorkoutInput;
};


export type MutationCreateWorkoutMoveArgs = {
  data: CreateWorkoutMoveInput;
};


export type MutationCreateWorkoutPlanArgs = {
  data: CreateWorkoutPlanInput;
};


export type MutationCreateWorkoutPlanDayWithWorkoutArgs = {
  data: CreateWorkoutPlanDayWithWorkoutInput;
};


export type MutationCreateWorkoutPlanDayWorkoutArgs = {
  data: CreateWorkoutPlanDayWorkoutInput;
};


export type MutationCreateWorkoutPlanEnrolmentArgs = {
  workoutPlanId: Scalars['ID'];
};


export type MutationCreateWorkoutPlanReviewArgs = {
  data: CreateWorkoutPlanReviewInput;
};


export type MutationCreateWorkoutSectionArgs = {
  data: CreateWorkoutSectionInput;
};


export type MutationCreateWorkoutSetArgs = {
  data: CreateWorkoutSetInput;
};


export type MutationCreateWorkoutSetWithWorkoutMovesArgs = {
  data: CreateWorkoutSetWithWorkoutMovesInput;
};


export type MutationCreateWorkoutTagArgs = {
  data: CreateWorkoutTagInput;
};


export type MutationDeleteBodyTrackingEntryByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteClubArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteClubInviteTokenArgs = {
  data: DeleteClubInviteTokenInput;
};


export type MutationDeleteClubMembersFeedPostArgs = {
  activityId: Scalars['ID'];
};


export type MutationDeleteCollectionByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompletedWorkoutPlanDayWorkoutArgs = {
  data: DeleteCompletedWorkoutPlanDayWorkoutInput;
};


export type MutationDeleteFitnessBenchmarkArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFitnessBenchmarkScoreArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFitnessBenchmarkWorkoutArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGymProfileByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLoggedWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLoggedWorkoutMoveArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteScheduledWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSkillByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserDayLogMoodArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserExerciseLoadTrackerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserGoalArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkoutMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkoutPlanDayWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkoutPlanDaysByIdArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDeleteWorkoutPlanEnrolmentByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkoutPlanReviewByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkoutSectionByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkoutSetByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkoutTagByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicateWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicateWorkoutMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicateWorkoutSetByIdArgs = {
  id: Scalars['ID'];
};


export type MutationGiveMemberAdminStatusArgs = {
  clubId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationMakeCopyWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationMarkAnnouncementUpdateAsSeenArgs = {
  data: MarkAnnouncementUpdateAsSeenInput;
};


export type MutationMarkWelcomeTodoItemAsSeenArgs = {
  data: MarkWelcomeTodoItemAsSeenInput;
};


export type MutationMoveWorkoutPlanDayToAnotherDayArgs = {
  data: MoveWorkoutPlanDayToAnotherDayInput;
};


export type MutationRemoveDocumentFromSkillArgs = {
  data: RemoveDocumentFromSkillInput;
};


export type MutationRemoveMemberAdminStatusArgs = {
  clubId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationRemoveUserFromClubArgs = {
  clubId: Scalars['ID'];
  userToRemoveId: Scalars['ID'];
};


export type MutationRemoveWorkoutFromClubArgs = {
  clubId: Scalars['ID'];
  workoutId: Scalars['ID'];
};


export type MutationRemoveWorkoutFromCollectionArgs = {
  data: RemoveWorkoutFromCollectionInput;
};


export type MutationRemoveWorkoutPlanFromClubArgs = {
  clubId: Scalars['ID'];
  workoutPlanId: Scalars['ID'];
};


export type MutationRemoveWorkoutPlanFromCollectionArgs = {
  data: RemoveWorkoutPlanFromCollectionInput;
};


export type MutationReorderWorkoutMovesArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationReorderWorkoutPlanDayWorkoutsArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationReorderWorkoutSectionsArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationReorderWorkoutSetsArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationSoftDeleteMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationSoftDeleteWorkoutPlanByIdArgs = {
  id: Scalars['ID'];
};


export type MutationUnarchiveCustomMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationUnarchiveWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationUnarchiveWorkoutPlanByIdArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateBodyTrackingEntryArgs = {
  data: UpdateBodyTrackingEntryInput;
};


export type MutationUpdateClubInviteTokenArgs = {
  data: UpdateClubInviteTokenInput;
};


export type MutationUpdateClubMemberNoteArgs = {
  data: UpdateClubMemberNoteInput;
};


export type MutationUpdateClubMetaDataAdminArgs = {
  data: UpdateClubMetaDataAdminInput;
};


export type MutationUpdateClubSummaryArgs = {
  data: UpdateClubSummaryInput;
};


export type MutationUpdateCollectionArgs = {
  data: UpdateCollectionInput;
};


export type MutationUpdateEquipmentArgs = {
  data: UpdateEquipmentInput;
};


export type MutationUpdateFitnessBenchmarkArgs = {
  data: UpdateFitnessBenchmarkInput;
};


export type MutationUpdateFitnessBenchmarkScoreArgs = {
  data: UpdateFitnessBenchmarkScoreInput;
};


export type MutationUpdateFitnessBenchmarkWorkoutArgs = {
  data: UpdateFitnessBenchmarkWorkoutInput;
};


export type MutationUpdateGymProfileArgs = {
  data: UpdateGymProfileInput;
};


export type MutationUpdateLoggedWorkoutArgs = {
  data: UpdateLoggedWorkoutInput;
};


export type MutationUpdateLoggedWorkoutMoveArgs = {
  data: UpdateLoggedWorkoutMoveInput;
};


export type MutationUpdateLoggedWorkoutSectionArgs = {
  data: UpdateLoggedWorkoutSectionInput;
};


export type MutationUpdateLoggedWorkoutSetArgs = {
  data: UpdateLoggedWorkoutSetInput;
};


export type MutationUpdateMoveArgs = {
  data: UpdateMoveInput;
};


export type MutationUpdateScheduledWorkoutArgs = {
  data: UpdateScheduledWorkoutInput;
};


export type MutationUpdateSkillArgs = {
  data: UpdateSkillInput;
};


export type MutationUpdateUserEatWellLogArgs = {
  data: UpdateUserEatWellLogInput;
};


export type MutationUpdateUserGoalArgs = {
  data: UpdateUserGoalInput;
};


export type MutationUpdateUserMeditationLogArgs = {
  data: UpdateUserMeditationLogInput;
};


export type MutationUpdateUserProfileArgs = {
  data: UpdateUserProfileInput;
};


export type MutationUpdateUserSleepWellLogArgs = {
  data: UpdateUserSleepWellLogInput;
};


export type MutationUpdateWorkoutArgs = {
  data: UpdateWorkoutInput;
};


export type MutationUpdateWorkoutMetaDataAdminArgs = {
  data: UpdateWorkoutMetaDataAdminInput;
};


export type MutationUpdateWorkoutMoveArgs = {
  data: UpdateWorkoutMoveInput;
};


export type MutationUpdateWorkoutMovesArgs = {
  data: Array<UpdateWorkoutMoveInput>;
};


export type MutationUpdateWorkoutPlanArgs = {
  data: UpdateWorkoutPlanInput;
};


export type MutationUpdateWorkoutPlanDayArgs = {
  data: UpdateWorkoutPlanDayInput;
};


export type MutationUpdateWorkoutPlanDayWorkoutArgs = {
  data: UpdateWorkoutPlanDayWorkoutInput;
};


export type MutationUpdateWorkoutPlanMetaDataAdminArgs = {
  data: UpdateWorkoutPlanMetaDataAdminInput;
};


export type MutationUpdateWorkoutPlanReviewArgs = {
  data: UpdateWorkoutPlanReviewInput;
};


export type MutationUpdateWorkoutSectionArgs = {
  data: UpdateWorkoutSectionInput;
};


export type MutationUpdateWorkoutSetArgs = {
  data: UpdateWorkoutSetInput;
};


export type MutationUpdateWorkoutTagArgs = {
  data: UpdateWorkoutTagInput;
};


export type MutationUserJoinPublicClubArgs = {
  clubId: Scalars['ID'];
};

export type ProgressWidget = {
  __typename?: 'ProgressWidget';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
};

export type PublicClubCountsAdmin = {
  __typename?: 'PublicClubCountsAdmin';
  invalid: Scalars['Int'];
  pending: Scalars['Int'];
  valid: Scalars['Int'];
};

export type PublicClubSummaryAdmin = {
  __typename?: 'PublicClubSummaryAdmin';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export enum PublicContentValidationStatus {
  Invalid = 'INVALID',
  Pending = 'PENDING',
  Pendingupdated = 'PENDINGUPDATED',
  Valid = 'VALID'
}

export type PublicWorkoutCountsAdmin = {
  __typename?: 'PublicWorkoutCountsAdmin';
  invalid: Scalars['Int'];
  pending: Scalars['Int'];
  valid: Scalars['Int'];
};

export type PublicWorkoutPlanCountsAdmin = {
  __typename?: 'PublicWorkoutPlanCountsAdmin';
  invalid: Scalars['Int'];
  pending: Scalars['Int'];
  valid: Scalars['Int'];
};

export type PublicWorkoutPlanSummaryAdmin = {
  __typename?: 'PublicWorkoutPlanSummaryAdmin';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PublicWorkoutSummaryAdmin = {
  __typename?: 'PublicWorkoutSummaryAdmin';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  adminAllUsers: Array<UserProfileSummary>;
  adminPublicClubById: ClubWithMetaDataAdmin;
  adminPublicClubCounts: PublicClubCountsAdmin;
  adminPublicClubSummaries: Array<PublicClubSummaryAdmin>;
  adminPublicWorkoutById: WorkoutWithMetaDataAdmin;
  adminPublicWorkoutCounts: PublicWorkoutCountsAdmin;
  adminPublicWorkoutPlanById: WorkoutPlanWithMetaDataAdmin;
  adminPublicWorkoutPlanCounts: PublicWorkoutPlanCountsAdmin;
  adminPublicWorkoutPlanSummaries: Array<PublicWorkoutPlanSummaryAdmin>;
  adminPublicWorkoutSummaries: Array<PublicWorkoutSummaryAdmin>;
  adminStandardFitnessBenchmarkWorkouts: Array<FitnessBenchmarkWorkout>;
  adminStandardFitnessBenchmarks: Array<FitnessBenchmark>;
  announcementUpdates: Array<AnnouncementUpdate>;
  bodyTrackingEntries: Array<BodyTrackingEntry>;
  checkClubInviteToken: CheckClubInviteTokenResult;
  checkUniqueClubName: Scalars['Boolean'];
  checkUniqueDisplayName: Scalars['Boolean'];
  checkUserClubMemberStatus: UserClubMemberStatus;
  clubChatSummary?: Maybe<ClubChatSummary>;
  clubInviteTokens: ClubInviteTokens;
  clubMemberNotes: Array<ClubMemberNote>;
  clubMembers: ClubMembers;
  clubMembersFeedPosts: Array<StreamEnrichedActivity>;
  clubSummaries: Array<ClubSummary>;
  clubSummary?: Maybe<ClubSummary>;
  clubWorkoutPlans: ClubWorkoutPlans;
  clubWorkouts: ClubWorkouts;
  coreData: CoreData;
  customMoves: Array<Move>;
  gymProfiles: Array<GymProfile>;
  lifetimeLogStatsSummary: LifetimeLogStatsSummary;
  logCountByWorkout: Scalars['Int'];
  loggedWorkoutById?: Maybe<LoggedWorkout>;
  publicClubs: Array<ClubSummary>;
  publicWorkoutPlans: Array<WorkoutPlanSummary>;
  publicWorkouts: Array<WorkoutSummary>;
  textSearchUserNames?: Maybe<Array<TextSearchResult>>;
  textSearchUserProfiles?: Maybe<Array<UserProfileSummary>>;
  textSearchWorkoutNames?: Maybe<Array<TextSearchResult>>;
  textSearchWorkoutPlanNames?: Maybe<Array<TextSearchResult>>;
  textSearchWorkoutPlans?: Maybe<Array<WorkoutPlanSummary>>;
  textSearchWorkouts?: Maybe<Array<WorkoutSummary>>;
  userArchivedCustomMoves: Array<Move>;
  userArchivedWorkoutPlans: Array<WorkoutPlan>;
  userArchivedWorkouts: Array<Workout>;
  userAvatarById?: Maybe<UserAvatarData>;
  userAvatars: Array<UserAvatarData>;
  userBenchmarkWorkouts: Array<FitnessBenchmarkWorkout>;
  userClubs: Array<ClubSummary>;
  userCollectionById: Collection;
  userCollections: Array<Collection>;
  userDayLogMoods: Array<UserDayLogMood>;
  userEatWellLogs: Array<UserEatWellLog>;
  userExerciseLoadTrackers: Array<UserExerciseLoadTracker>;
  userFitnessBenchmarks: Array<FitnessBenchmark>;
  userGoals: Array<UserGoal>;
  userLoggedWorkouts: Array<LoggedWorkout>;
  userMeditationLogs: Array<UserMeditationLog>;
  userProfile?: Maybe<UserProfile>;
  userProfiles: Array<UserProfileSummary>;
  userPublicWorkoutPlans: Array<WorkoutPlanSummary>;
  userPublicWorkouts: Array<WorkoutSummary>;
  userRecentlyViewedObjects: Array<UserRecentlyViewedObject>;
  userScheduledWorkouts: Array<ScheduledWorkout>;
  userSleepWellLogs: Array<UserSleepWellLog>;
  userWorkoutPlans: Array<WorkoutPlanSummary>;
  userWorkoutTags: Array<WorkoutTag>;
  userWorkouts: Array<WorkoutSummary>;
  validateToken: Scalars['Boolean'];
  welcomeTodoItems: Array<WelcomeTodoItem>;
  workoutById?: Maybe<Workout>;
  workoutPlanById?: Maybe<WorkoutPlan>;
  workoutPlanEnrolmentById?: Maybe<WorkoutPlanEnrolmentWithPlan>;
  workoutPlanEnrolments: Array<WorkoutPlanEnrolmentSummary>;
};


export type QueryAdminPublicClubByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAdminPublicClubSummariesArgs = {
  status: PublicContentValidationStatus;
};


export type QueryAdminPublicWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAdminPublicWorkoutPlanByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAdminPublicWorkoutPlanSummariesArgs = {
  status: PublicContentValidationStatus;
};


export type QueryAdminPublicWorkoutSummariesArgs = {
  status: PublicContentValidationStatus;
};


export type QueryCheckClubInviteTokenArgs = {
  id: Scalars['ID'];
};


export type QueryCheckUniqueClubNameArgs = {
  name: Scalars['String'];
};


export type QueryCheckUniqueDisplayNameArgs = {
  displayName: Scalars['String'];
};


export type QueryCheckUserClubMemberStatusArgs = {
  clubId: Scalars['ID'];
};


export type QueryClubChatSummaryArgs = {
  clubId: Scalars['ID'];
};


export type QueryClubInviteTokensArgs = {
  clubId: Scalars['ID'];
};


export type QueryClubMemberNotesArgs = {
  clubId: Scalars['ID'];
  cursor?: InputMaybe<Scalars['ID']>;
  memberId: Scalars['ID'];
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryClubMembersArgs = {
  clubId: Scalars['ID'];
};


export type QueryClubMembersFeedPostsArgs = {
  clubId: Scalars['ID'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryClubSummariesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryClubSummaryArgs = {
  id: Scalars['ID'];
};


export type QueryClubWorkoutPlansArgs = {
  clubId: Scalars['ID'];
};


export type QueryClubWorkoutsArgs = {
  clubId: Scalars['ID'];
};


export type QueryLifetimeLogStatsSummaryArgs = {
  userId: Scalars['ID'];
};


export type QueryLogCountByWorkoutArgs = {
  id: Scalars['ID'];
};


export type QueryLoggedWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type QueryPublicWorkoutPlansArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<WorkoutPlanFiltersInput>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryPublicWorkoutsArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<WorkoutFiltersInput>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryTextSearchUserNamesArgs = {
  text: Scalars['String'];
};


export type QueryTextSearchUserProfilesArgs = {
  text: Scalars['String'];
};


export type QueryTextSearchWorkoutNamesArgs = {
  text: Scalars['String'];
};


export type QueryTextSearchWorkoutPlanNamesArgs = {
  text: Scalars['String'];
};


export type QueryTextSearchWorkoutPlansArgs = {
  text: Scalars['String'];
};


export type QueryTextSearchWorkoutsArgs = {
  text: Scalars['String'];
};


export type QueryUserAvatarByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUserAvatarsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryUserCollectionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUserProfileArgs = {
  userId: Scalars['ID'];
};


export type QueryUserProfilesArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryUserPublicWorkoutPlansArgs = {
  userId: Scalars['ID'];
};


export type QueryUserPublicWorkoutsArgs = {
  userId: Scalars['ID'];
};


export type QueryWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type QueryWorkoutPlanByIdArgs = {
  id: Scalars['ID'];
};


export type QueryWorkoutPlanEnrolmentByIdArgs = {
  id: Scalars['ID'];
};

export type RemoveDocumentFromSkillInput = {
  id: Scalars['ID'];
};

export type RemoveWorkoutFromClubInput = {
  Workout: ConnectRelationInput;
  id: Scalars['ID'];
};

export type RemoveWorkoutFromCollectionInput = {
  Workout: ConnectRelationInput;
  collectionId: Scalars['ID'];
};

export type RemoveWorkoutPlanFromClubInput = {
  WorkoutPlan: ConnectRelationInput;
  id: Scalars['ID'];
};

export type RemoveWorkoutPlanFromCollectionInput = {
  WorkoutPlan: ConnectRelationInput;
  collectionId: Scalars['ID'];
};

export type ScheduledWorkout = {
  __typename?: 'ScheduledWorkout';
  GymProfile?: Maybe<GymProfile>;
  Workout?: Maybe<WorkoutSummary>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  loggedWorkoutId?: Maybe<Scalars['ID']>;
  note?: Maybe<Scalars['String']>;
  scheduledAt: Scalars['DateTime'];
  workoutPlanDayWorkoutId?: Maybe<Scalars['ID']>;
  workoutPlanEnrolmentId?: Maybe<Scalars['ID']>;
  workoutPlanName?: Maybe<Scalars['String']>;
};

export type Skill = {
  __typename?: 'Skill';
  awardingBody?: Maybe<Scalars['String']>;
  certificateRef?: Maybe<Scalars['String']>;
  certification?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  documentUri?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SortPositionUpdated = {
  __typename?: 'SortPositionUpdated';
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
};

export type StreamActivityExtraData = {
  __typename?: 'StreamActivityExtraData';
  articleUrl?: Maybe<Scalars['String']>;
  audioUrl?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  club?: Maybe<StreamFeedClub>;
  creator?: Maybe<StreamFeedUser>;
  imageUrl?: Maybe<Scalars['String']>;
  originalPostId?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type StreamActivityReactionCounts = {
  __typename?: 'StreamActivityReactionCounts';
  comments?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};

export type StreamEnrichedActivity = {
  __typename?: 'StreamEnrichedActivity';
  actor: StreamFeedUser;
  extraData: StreamActivityExtraData;
  id: Scalars['String'];
  object: Scalars['String'];
  reactionCounts?: Maybe<StreamActivityReactionCounts>;
  time: Scalars['DateTime'];
  userLikeReactionId?: Maybe<Scalars['String']>;
  verb: Scalars['String'];
};

export type StreamFeedClub = {
  __typename?: 'StreamFeedClub';
  data: StreamFeedClubData;
  id: Scalars['String'];
};

export type StreamFeedClubData = {
  __typename?: 'StreamFeedClubData';
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StreamFeedUser = {
  __typename?: 'StreamFeedUser';
  data: StreamFeedUserData;
  id: Scalars['String'];
};

export type StreamFeedUserData = {
  __typename?: 'StreamFeedUserData';
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TextSearchResult = {
  __typename?: 'TextSearchResult';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum TimeUnit {
  Hours = 'HOURS',
  Minutes = 'MINUTES',
  Seconds = 'SECONDS'
}

export type UpdateBodyTrackingEntryInput = {
  bodyweight?: InputMaybe<Scalars['Float']>;
  bodyweightUnit?: InputMaybe<BodyweightUnit>;
  fatPercent?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
  photoUris?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateClubInviteTokenInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  clubId: Scalars['ID'];
  id: Scalars['ID'];
  inviteLimit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateClubMemberNoteInput = {
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateClubMetaDataAdminInput = {
  id: Scalars['ID'];
  metaTags?: InputMaybe<Array<Scalars['String']>>;
  reasonNotValidated?: InputMaybe<Scalars['String']>;
  validated?: InputMaybe<PublicContentValidationStatus>;
};

export type UpdateClubSummaryInput = {
  contentAccessScope?: InputMaybe<ContentAccessScope>;
  coverImageUri?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: InputMaybe<Scalars['String']>;
  introVideoThumbUri?: InputMaybe<Scalars['String']>;
  introVideoUri?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCollectionInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateEquipmentInput = {
  altNames?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  loadAdjustable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFitnessBenchmarkInput = {
  FitnessBenchmarkCategory?: InputMaybe<ConnectRelationInput>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  instructionalVideoThumbUri?: InputMaybe<Scalars['String']>;
  instructionalVideoUri?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<FitnessBenchmarkScope>;
  type?: InputMaybe<FitnessBenchmarkScoreType>;
};

export type UpdateFitnessBenchmarkScoreInput = {
  completedOn?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  videoThumbUri?: InputMaybe<Scalars['String']>;
  videoUri?: InputMaybe<Scalars['String']>;
};

export type UpdateFitnessBenchmarkWorkoutInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  instructionalVideoThumbUri?: InputMaybe<Scalars['String']>;
  instructionalVideoUri?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Scalars['String']>;
  moveDescriptions?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  pointsForMoveCompleted?: InputMaybe<Array<Scalars['Int']>>;
  rounds?: InputMaybe<Scalars['Int']>;
  scope?: InputMaybe<FitnessBenchmarkScope>;
  type?: InputMaybe<FitnessBenchmarkWorkoutScoreType>;
};

export type UpdateGymProfileInput = {
  Equipments?: InputMaybe<Array<ConnectRelationInput>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateLoggedWorkoutInput = {
  GymProfile?: InputMaybe<ConnectRelationInput>;
  WorkoutGoals: Array<ConnectRelationInput>;
  completedOn?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
};

export type UpdateLoggedWorkoutMoveInput = {
  Equipment?: InputMaybe<ConnectRelationInput>;
  Move?: InputMaybe<ConnectRelationInput>;
  distanceUnit?: InputMaybe<DistanceUnit>;
  id: Scalars['ID'];
  loadAmount?: InputMaybe<Scalars['Float']>;
  loadUnit?: InputMaybe<LoadUnit>;
  repType?: InputMaybe<WorkoutMoveRepType>;
  reps: Scalars['Float'];
  timeUnit?: InputMaybe<TimeUnit>;
};

export type UpdateLoggedWorkoutSectionInput = {
  id: Scalars['ID'];
  repScore?: InputMaybe<Scalars['Int']>;
  timeTakenSeconds?: InputMaybe<Scalars['Int']>;
};

export type UpdateLoggedWorkoutSetInput = {
  id: Scalars['ID'];
  timeTakenSeconds?: InputMaybe<Scalars['Int']>;
};

export type UpdateMoveInput = {
  BodyAreaMoveScores?: InputMaybe<Array<BodyAreaMoveScoreInput>>;
  MoveType?: InputMaybe<ConnectRelationInput>;
  RequiredEquipments?: InputMaybe<Array<ConnectRelationInput>>;
  SelectableEquipments?: InputMaybe<Array<ConnectRelationInput>>;
  demoVideoThumbUri?: InputMaybe<Scalars['String']>;
  demoVideoUri?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<MoveScope>;
  searchTerms?: InputMaybe<Scalars['String']>;
  validRepTypes?: InputMaybe<Array<WorkoutMoveRepType>>;
};

export type UpdateScheduledWorkoutInput = {
  GymProfile?: InputMaybe<ConnectRelationInput>;
  LoggedWorkout?: InputMaybe<ConnectRelationInput>;
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
  scheduledAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateSkillInput = {
  awardingBody?: InputMaybe<Scalars['String']>;
  certificateRef?: InputMaybe<Scalars['String']>;
  certification?: InputMaybe<Scalars['String']>;
  documentUri?: InputMaybe<Scalars['String']>;
  experience?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateSortPositionInput = {
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
};

export type UpdateUserEatWellLogInput = {
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<UserDayLogRating>;
};

export type UpdateUserGoalInput = {
  completedDate?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserMeditationLogInput = {
  id: Scalars['ID'];
  minutesLogged?: InputMaybe<Scalars['Int']>;
  note?: InputMaybe<Scalars['String']>;
};

export type UpdateUserProfileInput = {
  activeFitnessBenchmarks?: InputMaybe<Array<Scalars['String']>>;
  activeProgressWidgets?: InputMaybe<Array<Scalars['String']>>;
  avatarUri?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['DateTime']>;
  countryCode?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  hasOnboarded?: InputMaybe<Scalars['Boolean']>;
  instagramHandle?: InputMaybe<Scalars['String']>;
  introVideoThumbUri?: InputMaybe<Scalars['String']>;
  introVideoUri?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  linkedinHandle?: InputMaybe<Scalars['String']>;
  tagline?: InputMaybe<Scalars['String']>;
  tiktokHandle?: InputMaybe<Scalars['String']>;
  townCity?: InputMaybe<Scalars['String']>;
  userProfileScope?: InputMaybe<UserProfileScope>;
  workoutsPerWeekTarget?: InputMaybe<Scalars['Int']>;
  youtubeHandle?: InputMaybe<Scalars['String']>;
};

export type UpdateUserProfileResult = {
  __typename?: 'UpdateUserProfileResult';
  activeFitnessBenchmarks?: Maybe<Array<Scalars['String']>>;
  activeProgressWidgets?: Maybe<Array<Scalars['String']>>;
  avatarUri?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['DateTime']>;
  countryCode?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  hasOnboarded?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  instagramHandle?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  linkedinHandle?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  tiktokHandle?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
  userProfileScope?: Maybe<UserProfileScope>;
  workoutsPerWeekTarget?: Maybe<Scalars['Int']>;
  youtubeHandle?: Maybe<Scalars['String']>;
};

export type UpdateUserSleepWellLogInput = {
  id: Scalars['ID'];
  minutesSlept?: InputMaybe<Scalars['Int']>;
  note?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<UserDayLogRating>;
};

export type UpdateWorkoutInput = {
  WorkoutGoals?: InputMaybe<Array<ConnectRelationInput>>;
  WorkoutTags?: InputMaybe<Array<ConnectRelationInput>>;
  contentAccessScope?: InputMaybe<ContentAccessScope>;
  coverImageUri?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: InputMaybe<Scalars['String']>;
  introVideoThumbUri?: InputMaybe<Scalars['String']>;
  introVideoUri?: InputMaybe<Scalars['String']>;
  lengthMinutes?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkoutMetaDataAdminInput = {
  difficultyLevel?: InputMaybe<DifficultyLevel>;
  id: Scalars['ID'];
  metaTags?: InputMaybe<Array<Scalars['String']>>;
  reasonNotValidated?: InputMaybe<Scalars['String']>;
  validated?: InputMaybe<PublicContentValidationStatus>;
};

export type UpdateWorkoutMoveInput = {
  Equipment?: InputMaybe<ConnectRelationInput>;
  Move?: InputMaybe<ConnectRelationInput>;
  distanceUnit?: InputMaybe<DistanceUnit>;
  id: Scalars['ID'];
  loadAmount?: InputMaybe<Scalars['Float']>;
  loadUnit?: InputMaybe<LoadUnit>;
  repType?: InputMaybe<WorkoutMoveRepType>;
  reps?: InputMaybe<Scalars['Float']>;
  timeUnit?: InputMaybe<TimeUnit>;
};

export type UpdateWorkoutPlanDayInput = {
  dayNumber?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkoutPlanDayWorkoutInput = {
  Workout?: InputMaybe<ConnectRelationInput>;
  WorkoutPlanDay?: InputMaybe<ConnectRelationInput>;
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkoutPlanInput = {
  WorkoutTags?: InputMaybe<Array<ConnectRelationInput>>;
  contentAccessScope?: InputMaybe<ContentAccessScope>;
  coverImageUri?: InputMaybe<Scalars['String']>;
  daysPerWeek?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: InputMaybe<Scalars['String']>;
  introVideoThumbUri?: InputMaybe<Scalars['String']>;
  introVideoUri?: InputMaybe<Scalars['String']>;
  lengthWeeks?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkoutPlanMetaDataAdminInput = {
  difficultyLevel?: InputMaybe<DifficultyLevel>;
  id: Scalars['ID'];
  metaTags?: InputMaybe<Array<Scalars['String']>>;
  reasonNotValidated?: InputMaybe<Scalars['String']>;
  validated?: InputMaybe<PublicContentValidationStatus>;
};

export type UpdateWorkoutPlanReviewInput = {
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  score?: InputMaybe<Scalars['Float']>;
};

export type UpdateWorkoutSectionInput = {
  WorkoutSectionType?: InputMaybe<ConnectRelationInput>;
  classAudioUri?: InputMaybe<Scalars['String']>;
  classVideoThumbUri?: InputMaybe<Scalars['String']>;
  classVideoUri?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: InputMaybe<Scalars['String']>;
  introVideoThumbUri?: InputMaybe<Scalars['String']>;
  introVideoUri?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  rounds?: InputMaybe<Scalars['Int']>;
  timecap?: InputMaybe<Scalars['Int']>;
};

export type UpdateWorkoutSetInput = {
  duration?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type UpdateWorkoutTagInput = {
  id: Scalars['ID'];
  tag: Scalars['String'];
};

export type UserAvatarData = {
  __typename?: 'UserAvatarData';
  avatarUri?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  id: Scalars['ID'];
};

export enum UserClubMemberStatus {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  None = 'NONE',
  Owner = 'OWNER'
}

export type UserDayLogMood = {
  __typename?: 'UserDayLogMood';
  createdAt: Scalars['DateTime'];
  energyScore: Scalars['Int'];
  id: Scalars['ID'];
  moodScore: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
};

export enum UserDayLogRating {
  Average = 'AVERAGE',
  Bad = 'BAD',
  Good = 'GOOD'
}

export type UserEatWellLog = {
  __typename?: 'UserEatWellLog';
  createdAt: Scalars['DateTime'];
  dayNumber: Scalars['Int'];
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  rating: UserDayLogRating;
  year: Scalars['Int'];
};

export type UserExerciseLoadTracker = {
  __typename?: 'UserExerciseLoadTracker';
  Equipment?: Maybe<Equipment>;
  Move: Move;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  loadUnit: LoadUnit;
  reps: Scalars['Int'];
};

export type UserGoal = {
  __typename?: 'UserGoal';
  completedDate?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  deadline?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserMeditationLog = {
  __typename?: 'UserMeditationLog';
  createdAt: Scalars['DateTime'];
  dayNumber: Scalars['Int'];
  id: Scalars['ID'];
  minutesLogged: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
  year: Scalars['Int'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  Clubs: Array<ClubSummary>;
  LifetimeLogStatsSummary?: Maybe<LifetimeLogStatsSummary>;
  Skills: Array<Skill>;
  activeFitnessBenchmarks?: Maybe<Array<Scalars['String']>>;
  activeProgressWidgets?: Maybe<Array<Scalars['String']>>;
  avatarUri?: Maybe<Scalars['String']>;
  bestBenchmarkScores?: Maybe<Array<BestBenchmarkScoreSummary>>;
  bio?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['DateTime']>;
  countryCode?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  followerCount?: Maybe<Scalars['Int']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  instagramHandle?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  linkedinHandle?: Maybe<Scalars['String']>;
  planCount?: Maybe<Scalars['Int']>;
  tagline?: Maybe<Scalars['String']>;
  tiktokHandle?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
  userProfileScope: UserProfileScope;
  workoutCount?: Maybe<Scalars['Int']>;
  workoutsPerWeekTarget?: Maybe<Scalars['Int']>;
  youtubeHandle?: Maybe<Scalars['String']>;
};

export enum UserProfileScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type UserProfileSummary = {
  __typename?: 'UserProfileSummary';
  Clubs: Array<ClubSummary>;
  avatarUri?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  id: Scalars['ID'];
  planCount: Scalars['Int'];
  skills: Array<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  townCity?: Maybe<Scalars['String']>;
  userProfileScope: UserProfileScope;
  workoutCount: Scalars['Int'];
};

export type UserRecentlyViewedObject = {
  __typename?: 'UserRecentlyViewedObject';
  Club?: Maybe<ClubSummary>;
  Workout?: Maybe<WorkoutSummary>;
  WorkoutPlan?: Maybe<WorkoutPlanSummary>;
};

export type UserSleepWellLog = {
  __typename?: 'UserSleepWellLog';
  createdAt: Scalars['DateTime'];
  dayNumber: Scalars['Int'];
  id: Scalars['ID'];
  minutesSlept?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  rating: UserDayLogRating;
  year: Scalars['Int'];
};

export type WelcomeTodoItem = {
  __typename?: 'WelcomeTodoItem';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  routeTo?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  videoUri?: Maybe<Scalars['String']>;
};

export type Workout = {
  __typename?: 'Workout';
  User: UserAvatarData;
  WorkoutGoals: Array<WorkoutGoal>;
  WorkoutSections: Array<WorkoutSection>;
  WorkoutTags: Array<WorkoutTag>;
  archived: Scalars['Boolean'];
  contentAccessScope: ContentAccessScope;
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  difficultyLevel?: Maybe<DifficultyLevel>;
  id: Scalars['ID'];
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  lengthMinutes?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type WorkoutFiltersInput = {
  availableEquipments: Array<Scalars['ID']>;
  bodyweightOnly?: InputMaybe<Scalars['Boolean']>;
  difficultyLevel?: InputMaybe<DifficultyLevel>;
  excludedMoves: Array<Scalars['ID']>;
  hasClassAudio?: InputMaybe<Scalars['Boolean']>;
  hasClassVideo?: InputMaybe<Scalars['Boolean']>;
  maxLength?: InputMaybe<Scalars['Int']>;
  minLength?: InputMaybe<Scalars['Int']>;
  requiredMoves: Array<Scalars['ID']>;
  targetedBodyAreas: Array<Scalars['ID']>;
  workoutGoals: Array<Scalars['ID']>;
  workoutSectionTypes: Array<Scalars['ID']>;
};

export type WorkoutGoal = {
  __typename?: 'WorkoutGoal';
  description: Scalars['String'];
  hexColor: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type WorkoutMove = {
  __typename?: 'WorkoutMove';
  Equipment?: Maybe<Equipment>;
  Move: Move;
  distanceUnit: DistanceUnit;
  id: Scalars['ID'];
  loadAmount: Scalars['Float'];
  loadUnit: LoadUnit;
  repType: WorkoutMoveRepType;
  reps: Scalars['Float'];
  sortPosition: Scalars['Int'];
  timeUnit: TimeUnit;
};

export enum WorkoutMoveRepType {
  Calories = 'CALORIES',
  Distance = 'DISTANCE',
  Reps = 'REPS',
  Time = 'TIME'
}

export type WorkoutPlan = {
  __typename?: 'WorkoutPlan';
  User: UserAvatarData;
  WorkoutPlanDays: Array<WorkoutPlanDay>;
  WorkoutPlanEnrolments: Array<WorkoutPlanEnrolment>;
  WorkoutPlanReviews: Array<WorkoutPlanReview>;
  WorkoutTags: Array<WorkoutTag>;
  archived: Scalars['Boolean'];
  contentAccessScope: ContentAccessScope;
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  daysPerWeek: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  lengthWeeks: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type WorkoutPlanDay = {
  __typename?: 'WorkoutPlanDay';
  WorkoutPlanDayWorkouts: Array<WorkoutPlanDayWorkout>;
  dayNumber: Scalars['Int'];
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
};

export type WorkoutPlanDayWorkout = {
  __typename?: 'WorkoutPlanDayWorkout';
  Workout: Workout;
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  sortPosition: Scalars['Int'];
};

export type WorkoutPlanEnrolment = {
  __typename?: 'WorkoutPlanEnrolment';
  CompletedWorkoutPlanDayWorkouts: Array<CompletedWorkoutPlanDayWorkout>;
  User: UserAvatarData;
  id: Scalars['ID'];
  startDate?: Maybe<Scalars['DateTime']>;
};

export type WorkoutPlanEnrolmentSummary = {
  __typename?: 'WorkoutPlanEnrolmentSummary';
  WorkoutPlan: WorkoutPlanSummary;
  completedWorkoutsCount: Scalars['Int'];
  id: Scalars['ID'];
  startDate?: Maybe<Scalars['DateTime']>;
};

export type WorkoutPlanEnrolmentWithPlan = {
  __typename?: 'WorkoutPlanEnrolmentWithPlan';
  WorkoutPlan: WorkoutPlan;
  WorkoutPlanEnrolment: WorkoutPlanEnrolment;
};

export type WorkoutPlanFiltersInput = {
  bodyweightOnly?: InputMaybe<Scalars['Boolean']>;
  daysPerWeek?: InputMaybe<Scalars['Int']>;
  difficultyLevel?: InputMaybe<DifficultyLevel>;
  lengthWeeks?: InputMaybe<Scalars['Int']>;
  workoutGoals: Array<Scalars['ID']>;
};

export type WorkoutPlanReview = {
  __typename?: 'WorkoutPlanReview';
  User: UserAvatarData;
  comment?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  score: Scalars['Float'];
};

export type WorkoutPlanSummary = {
  __typename?: 'WorkoutPlanSummary';
  User: UserAvatarData;
  archived: Scalars['Boolean'];
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  daysPerWeek: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enrolmentsCount: Scalars['Int'];
  goals: Array<WorkoutGoal>;
  id: Scalars['ID'];
  lengthWeeks: Scalars['Int'];
  name: Scalars['String'];
  reviewCount: Scalars['Int'];
  reviewScore?: Maybe<Scalars['Float']>;
  tags: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  workoutsCount: Scalars['Int'];
};

export type WorkoutPlanWithMetaDataAdmin = {
  __typename?: 'WorkoutPlanWithMetaDataAdmin';
  User: UserAvatarData;
  WorkoutPlanDays: Array<WorkoutPlanDay>;
  WorkoutPlanEnrolments: Array<WorkoutPlanEnrolment>;
  WorkoutPlanReviews: Array<WorkoutPlanReview>;
  WorkoutTags: Array<WorkoutTag>;
  archived: Scalars['Boolean'];
  contentAccessScope: ContentAccessScope;
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  daysPerWeek: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  difficultyLevel?: Maybe<DifficultyLevel>;
  id: Scalars['ID'];
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  lengthWeeks: Scalars['Int'];
  metaTags: Array<Scalars['String']>;
  name: Scalars['String'];
  reasonNotValidated?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  validated: PublicContentValidationStatus;
};

export type WorkoutSection = {
  __typename?: 'WorkoutSection';
  WorkoutSectionType: WorkoutSectionType;
  WorkoutSets: Array<WorkoutSet>;
  classAudioUri?: Maybe<Scalars['String']>;
  classVideoThumbUri?: Maybe<Scalars['String']>;
  classVideoUri?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  rounds: Scalars['Int'];
  sortPosition: Scalars['Int'];
  timecap: Scalars['Int'];
};

export type WorkoutSectionType = {
  __typename?: 'WorkoutSectionType';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  subtitle: Scalars['String'];
  validRepTypes: Array<WorkoutMoveRepType>;
};

export type WorkoutSet = {
  __typename?: 'WorkoutSet';
  WorkoutMoves: Array<WorkoutMove>;
  duration: Scalars['Int'];
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
};

export enum WorkoutSetGeneratorTarget {
  Load = 'LOAD',
  Reps = 'REPS'
}

export enum WorkoutSetGeneratorType {
  Ladderdown = 'LADDERDOWN',
  Ladderup = 'LADDERUP',
  Pyramiddown = 'PYRAMIDDOWN',
  Pyramidup = 'PYRAMIDUP'
}

export type WorkoutSummary = {
  __typename?: 'WorkoutSummary';
  User: UserAvatarData;
  archived: Scalars['Boolean'];
  bodyAreas: Array<Scalars['ID']>;
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  difficultyLevel?: Maybe<DifficultyLevel>;
  equipments: Array<Scalars['String']>;
  goals: Array<Scalars['String']>;
  hasClassAudio: Scalars['Boolean'];
  hasClassVideo: Scalars['Boolean'];
  id: Scalars['ID'];
  lengthMinutes?: Maybe<Scalars['Int']>;
  loggedSessionsCount: Scalars['Int'];
  name: Scalars['String'];
  sectionTypes: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type WorkoutTag = {
  __typename?: 'WorkoutTag';
  id: Scalars['ID'];
  tag: Scalars['String'];
};

export type WorkoutWithMetaDataAdmin = {
  __typename?: 'WorkoutWithMetaDataAdmin';
  User: UserAvatarData;
  WorkoutGoals: Array<WorkoutGoal>;
  WorkoutSections: Array<WorkoutSection>;
  WorkoutTags: Array<WorkoutTag>;
  archived: Scalars['Boolean'];
  contentAccessScope: ContentAccessScope;
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  difficultyLevel?: Maybe<DifficultyLevel>;
  id: Scalars['ID'];
  introAudioUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  lengthMinutes?: Maybe<Scalars['Int']>;
  metaTags: Array<Scalars['String']>;
  name: Scalars['String'];
  reasonNotValidated?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  validated: PublicContentValidationStatus;
};

export type ClubWithMetaDataAdminDataFragment = { __typename: 'ClubWithMetaDataAdmin', id: string, createdAt: any, name: string, description?: string | null | undefined, location?: string | null | undefined, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, metaTags: Array<string>, Owner: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, Admins: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }>, Members: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }> };

export type ClubSummaryFragment = { __typename: 'ClubSummary', id: string, createdAt: any, name: string, description?: string | null | undefined, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, location?: string | null | undefined, memberCount: number, workoutCount: number, planCount: number };

export type PublicClubSummaryAdminFragment = { __typename: 'PublicClubSummaryAdmin', id: string, createdAt: any, name: string };

export type ClubMemberNoteFragment = { __typename: 'ClubMemberNote', id: string, createdAt: any, note: string, tags: Array<string> };

export type ClubChatSummaryFragment = { __typename?: 'ClubChatSummary', id: string, name: string, coverImageUri?: string | null | undefined, Owner: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, Admins: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }>, Members: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }> };

export type ClubMemberSummaryFragment = { __typename: 'ClubMemberSummary', id: string, displayName: string, avatarUri?: string | null | undefined, townCity?: string | null | undefined, countryCode?: string | null | undefined, tagline?: string | null | undefined, skills: Array<string> };

export type ClubInviteTokenFragment = { __typename: 'ClubInviteToken', id: string, createdAt: any, name: string, active: boolean, inviteLimit: number, joinedUserIds: Array<string> };

export type FitnessBenchmarkCategoryFragment = { __typename: 'FitnessBenchmarkCategory', id: string, createdAt: any, name: string, description: string };

export type FitnessBenchmarkFragment = { __typename: 'FitnessBenchmark', id: string, createdAt: any, scope: FitnessBenchmarkScope, type: FitnessBenchmarkScoreType, name: string, description?: string | null | undefined, instructions?: string | null | undefined, instructionalVideoUri?: string | null | undefined, instructionalVideoThumbUri?: string | null | undefined };

export type FitnessBenchmarkScoreFragment = { __typename: 'FitnessBenchmarkScore', id: string, createdAt: any, completedOn: any, score: number, note?: string | null | undefined, videoUri?: string | null | undefined, videoThumbUri?: string | null | undefined };

export type FitnessBenchmarkWorkoutFragment = { __typename: 'FitnessBenchmarkWorkout', id: string, createdAt: any, scope: FitnessBenchmarkScope, type: FitnessBenchmarkWorkoutScoreType, name: string, description?: string | null | undefined, instructions?: string | null | undefined, instructionalVideoUri?: string | null | undefined, instructionalVideoThumbUri?: string | null | undefined, rounds: number, moveDescriptions: Array<string>, pointsForMoveCompleted: Array<number> };

export type FitnessBenchmarkWorkoutScoreFragment = { __typename: 'FitnessBenchmarkWorkoutScore', id: string, createdAt: any, completedOn: any, score: number, note?: string | null | undefined };

export type EquipmentFragment = { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean };

export type BodyAreaFragment = { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower };

export type MoveFragment = { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType> };

export type MoveTypeFragment = { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined };

export type ProgressWidgetFragment = { __typename: 'ProgressWidget', id: string, createdAt: any, name: string, subtitle?: string | null | undefined, description?: string | null | undefined };

export type UserAvatarDataFragment = { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string };

export type UserProfileSummaryFragment = { __typename: 'UserProfileSummary', userProfileScope: UserProfileScope, id: string, avatarUri?: string | null | undefined, tagline?: string | null | undefined, townCity?: string | null | undefined, countryCode?: string | null | undefined, displayName: string, workoutCount: number, planCount: number, skills: Array<string> };

export type WorkoutWithMetaDataAdminDataFragment = { __typename: 'WorkoutWithMetaDataAdmin', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, contentAccessScope: ContentAccessScope, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, difficultyLevel?: DifficultyLevel | null | undefined, metaTags: Array<string>, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutGoals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutSections: Array<{ __typename: 'WorkoutSection', id: string, name?: string | null | undefined, note?: string | null | undefined, rounds: number, timecap: number, sortPosition: number, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, classVideoUri?: string | null | undefined, classVideoThumbUri?: string | null | undefined, classAudioUri?: string | null | undefined, WorkoutSectionType: { __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }, WorkoutSets: Array<{ __typename: 'WorkoutSet', id: string, sortPosition: number, duration: number, WorkoutMoves: Array<{ __typename: 'WorkoutMove', id: string, sortPosition: number, reps: number, repType: WorkoutMoveRepType, distanceUnit: DistanceUnit, loadAmount: number, loadUnit: LoadUnit, timeUnit: TimeUnit, Equipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined, Move: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }>, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> } }> }> }> };

export type WorkoutDataFragment = { __typename: 'Workout', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, contentAccessScope: ContentAccessScope, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutGoals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutSections: Array<{ __typename: 'WorkoutSection', id: string, name?: string | null | undefined, note?: string | null | undefined, rounds: number, timecap: number, sortPosition: number, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, classVideoUri?: string | null | undefined, classVideoThumbUri?: string | null | undefined, classAudioUri?: string | null | undefined, WorkoutSectionType: { __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }, WorkoutSets: Array<{ __typename: 'WorkoutSet', id: string, sortPosition: number, duration: number, WorkoutMoves: Array<{ __typename: 'WorkoutMove', id: string, sortPosition: number, reps: number, repType: WorkoutMoveRepType, distanceUnit: DistanceUnit, loadAmount: number, loadUnit: LoadUnit, timeUnit: TimeUnit, Equipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined, Move: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }>, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> } }> }> }> };

export type PublicWorkoutSummaryAdminFragment = { __typename: 'PublicWorkoutSummaryAdmin', id: string, createdAt: any, updatedAt: any, name: string };

export type ArchivedWorkoutFragment = { __typename: 'Workout', id: string, name: string, archived: boolean };

export type WorkoutGoalFragment = { __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string };

export type WorkoutSectionFragment = { __typename: 'WorkoutSection', id: string, name?: string | null | undefined, note?: string | null | undefined, rounds: number, timecap: number, sortPosition: number, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, classVideoUri?: string | null | undefined, classVideoThumbUri?: string | null | undefined, classAudioUri?: string | null | undefined };

export type WorkoutSectionTypeFragment = { __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> };

export type WorkoutSetFragment = { __typename: 'WorkoutSet', id: string, sortPosition: number, duration: number };

export type WorkoutMoveFragment = { __typename: 'WorkoutMove', id: string, sortPosition: number, reps: number, repType: WorkoutMoveRepType, distanceUnit: DistanceUnit, loadAmount: number, loadUnit: LoadUnit, timeUnit: TimeUnit };

export type WorkoutTagFragment = { __typename: 'WorkoutTag', id: string, tag: string };

export type WorkoutPlanEnrolmentFragment = { __typename: 'WorkoutPlanEnrolment', id: string, startDate?: any | null | undefined };

export type CompletedWorkoutPlanDayWorkoutFragment = { __typename: 'CompletedWorkoutPlanDayWorkout', id: string, loggedWorkoutId: string, workoutPlanDayWorkoutId: string };

export type WorkoutPlanWithMetaDataAdminDataFragment = { __typename: 'WorkoutPlanWithMetaDataAdmin', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthWeeks: number, daysPerWeek: number, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, difficultyLevel?: DifficultyLevel | null | undefined, metaTags: Array<string>, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutPlanDays: Array<{ __typename: 'WorkoutPlanDay', id: string, note?: string | null | undefined, dayNumber: number, WorkoutPlanDayWorkouts: Array<{ __typename: 'WorkoutPlanDayWorkout', id: string, note?: string | null | undefined, sortPosition: number, Workout: { __typename: 'Workout', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, contentAccessScope: ContentAccessScope, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutGoals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutSections: Array<{ __typename: 'WorkoutSection', id: string, name?: string | null | undefined, note?: string | null | undefined, rounds: number, timecap: number, sortPosition: number, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, classVideoUri?: string | null | undefined, classVideoThumbUri?: string | null | undefined, classAudioUri?: string | null | undefined, WorkoutSectionType: { __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }, WorkoutSets: Array<{ __typename: 'WorkoutSet', id: string, sortPosition: number, duration: number, WorkoutMoves: Array<{ __typename: 'WorkoutMove', id: string, sortPosition: number, reps: number, repType: WorkoutMoveRepType, distanceUnit: DistanceUnit, loadAmount: number, loadUnit: LoadUnit, timeUnit: TimeUnit, Equipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined, Move: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }>, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> } }> }> }> } }> }>, WorkoutPlanReviews: Array<{ __typename: 'WorkoutPlanReview', id: string, createdAt: any, score: number, comment?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string } }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutPlanEnrolments: Array<{ __typename: 'WorkoutPlanEnrolment', id: string, startDate?: any | null | undefined, CompletedWorkoutPlanDayWorkouts: Array<{ __typename: 'CompletedWorkoutPlanDayWorkout', id: string, loggedWorkoutId: string, workoutPlanDayWorkoutId: string }>, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string } }> };

export type PublicWorkoutPlanSummaryAdminFragment = { __typename: 'PublicWorkoutPlanSummaryAdmin', id: string, createdAt: any, updatedAt: any, name: string };

export type WorkoutPlanDayFragment = { __typename: 'WorkoutPlanDay', id: string, note?: string | null | undefined, dayNumber: number };

export type WorkoutPlanDayWorkoutFragment = { __typename: 'WorkoutPlanDayWorkout', id: string, note?: string | null | undefined, sortPosition: number };

export type WorkoutPlanReviewFragment = { __typename: 'WorkoutPlanReview', id: string, createdAt: any, score: number, comment?: string | null | undefined };

export type AdminAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminAllUsersQuery = { __typename?: 'Query', adminAllUsers: Array<{ __typename: 'UserProfileSummary', userProfileScope: UserProfileScope, id: string, avatarUri?: string | null | undefined, tagline?: string | null | undefined, townCity?: string | null | undefined, countryCode?: string | null | undefined, displayName: string, workoutCount: number, planCount: number, skills: Array<string>, Clubs: Array<{ __typename: 'ClubSummary', id: string, createdAt: any, name: string, description?: string | null | undefined, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, location?: string | null | undefined, memberCount: number, workoutCount: number, planCount: number, Owner: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, Admins: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }> }> }> };

export type CoreDataQueryVariables = Exact<{ [key: string]: never; }>;


export type CoreDataQuery = { __typename?: 'Query', coreData: { __typename: 'CoreData', bodyAreas: Array<{ __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower }>, equipment: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, moveTypes: Array<{ __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }>, workoutGoals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }>, workoutSectionTypes: Array<{ __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }>, standardMoves: Array<{ __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }>, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> }>, progressWidgets: Array<{ __typename: 'ProgressWidget', id: string, createdAt: any, name: string, subtitle?: string | null | undefined, description?: string | null | undefined }>, fitnessBenchmarkCategories: Array<{ __typename: 'FitnessBenchmarkCategory', id: string, createdAt: any, name: string, description: string }> } };

export type CreateEquipmentMutationVariables = Exact<{
  data: CreateEquipmentInput;
}>;


export type CreateEquipmentMutation = { __typename?: 'Mutation', createEquipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined };

export type UpdateEquipmentMutationVariables = Exact<{
  data: UpdateEquipmentInput;
}>;


export type UpdateEquipmentMutation = { __typename?: 'Mutation', updateEquipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined };

export type AdminStandardFitnessBenchmarkWorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminStandardFitnessBenchmarkWorkoutsQuery = { __typename?: 'Query', adminStandardFitnessBenchmarkWorkouts: Array<{ __typename: 'FitnessBenchmarkWorkout', id: string, createdAt: any, scope: FitnessBenchmarkScope, type: FitnessBenchmarkWorkoutScoreType, name: string, description?: string | null | undefined, instructions?: string | null | undefined, instructionalVideoUri?: string | null | undefined, instructionalVideoThumbUri?: string | null | undefined, rounds: number, moveDescriptions: Array<string>, pointsForMoveCompleted: Array<number>, FitnessBenchmarkWorkoutScores?: Array<{ __typename: 'FitnessBenchmarkWorkoutScore', id: string, createdAt: any, completedOn: any, score: number, note?: string | null | undefined }> | null | undefined }> };

export type AdminStandardFitnessBenchmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminStandardFitnessBenchmarksQuery = { __typename?: 'Query', adminStandardFitnessBenchmarks: Array<{ __typename: 'FitnessBenchmark', id: string, createdAt: any, scope: FitnessBenchmarkScope, type: FitnessBenchmarkScoreType, name: string, description?: string | null | undefined, instructions?: string | null | undefined, instructionalVideoUri?: string | null | undefined, instructionalVideoThumbUri?: string | null | undefined, FitnessBenchmarkCategory: { __typename: 'FitnessBenchmarkCategory', id: string, createdAt: any, name: string, description: string }, FitnessBenchmarkScores?: Array<{ __typename: 'FitnessBenchmarkScore', id: string, createdAt: any, completedOn: any, score: number, note?: string | null | undefined, videoUri?: string | null | undefined, videoThumbUri?: string | null | undefined }> | null | undefined }> };

export type CreateFitnessBenchmarkMutationVariables = Exact<{
  data: CreateFitnessBenchmarkInput;
}>;


export type CreateFitnessBenchmarkMutation = { __typename?: 'Mutation', createFitnessBenchmark: { __typename: 'FitnessBenchmark', id: string, createdAt: any, scope: FitnessBenchmarkScope, type: FitnessBenchmarkScoreType, name: string, description?: string | null | undefined, instructions?: string | null | undefined, instructionalVideoUri?: string | null | undefined, instructionalVideoThumbUri?: string | null | undefined, FitnessBenchmarkCategory: { __typename: 'FitnessBenchmarkCategory', id: string, createdAt: any, name: string, description: string } } };

export type CreateFitnessBenchmarkWorkoutMutationVariables = Exact<{
  data: CreateFitnessBenchmarkWorkoutInput;
}>;


export type CreateFitnessBenchmarkWorkoutMutation = { __typename?: 'Mutation', createFitnessBenchmarkWorkout: { __typename: 'FitnessBenchmarkWorkout', id: string, createdAt: any, scope: FitnessBenchmarkScope, type: FitnessBenchmarkWorkoutScoreType, name: string, description?: string | null | undefined, instructions?: string | null | undefined, instructionalVideoUri?: string | null | undefined, instructionalVideoThumbUri?: string | null | undefined, rounds: number, moveDescriptions: Array<string>, pointsForMoveCompleted: Array<number> } };

export type DeleteFitnessBenchmarkMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteFitnessBenchmarkMutation = { __typename?: 'Mutation', deleteFitnessBenchmark: string };

export type DeleteFitnessBenchmarkWorkoutMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteFitnessBenchmarkWorkoutMutation = { __typename?: 'Mutation', deleteFitnessBenchmarkWorkout: string };

export type UpdateFitnessBenchmarkWorkoutMutationVariables = Exact<{
  data: UpdateFitnessBenchmarkWorkoutInput;
}>;


export type UpdateFitnessBenchmarkWorkoutMutation = { __typename?: 'Mutation', updateFitnessBenchmarkWorkout: { __typename: 'FitnessBenchmarkWorkout', id: string, createdAt: any, scope: FitnessBenchmarkScope, type: FitnessBenchmarkWorkoutScoreType, name: string, description?: string | null | undefined, instructions?: string | null | undefined, instructionalVideoUri?: string | null | undefined, instructionalVideoThumbUri?: string | null | undefined, rounds: number, moveDescriptions: Array<string>, pointsForMoveCompleted: Array<number> } };

export type UpdateFitnessBenchmarkMutationVariables = Exact<{
  data: UpdateFitnessBenchmarkInput;
}>;


export type UpdateFitnessBenchmarkMutation = { __typename?: 'Mutation', updateFitnessBenchmark: { __typename: 'FitnessBenchmark', id: string, createdAt: any, scope: FitnessBenchmarkScope, type: FitnessBenchmarkScoreType, name: string, description?: string | null | undefined, instructions?: string | null | undefined, instructionalVideoUri?: string | null | undefined, instructionalVideoThumbUri?: string | null | undefined, FitnessBenchmarkCategory: { __typename: 'FitnessBenchmarkCategory', id: string, createdAt: any, name: string, description: string } } };

export type CreateMoveMutationVariables = Exact<{
  data: CreateMoveInput;
}>;


export type CreateMoveMutation = { __typename?: 'Mutation', createMove: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }> } };

export type UpdateMoveMutationVariables = Exact<{
  data: UpdateMoveInput;
}>;


export type UpdateMoveMutation = { __typename?: 'Mutation', updateMove: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }> } };

export type AdminPublicClubByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AdminPublicClubByIdQuery = { __typename?: 'Query', adminPublicClubById: { __typename: 'ClubWithMetaDataAdmin', id: string, createdAt: any, name: string, description?: string | null | undefined, location?: string | null | undefined, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, metaTags: Array<string>, Owner: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, Admins: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }>, Members: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }> } };

export type AdminPublicWorkoutByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AdminPublicWorkoutByIdQuery = { __typename?: 'Query', adminPublicWorkoutById: { __typename: 'WorkoutWithMetaDataAdmin', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, contentAccessScope: ContentAccessScope, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, difficultyLevel?: DifficultyLevel | null | undefined, metaTags: Array<string>, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutGoals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutSections: Array<{ __typename: 'WorkoutSection', id: string, name?: string | null | undefined, note?: string | null | undefined, rounds: number, timecap: number, sortPosition: number, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, classVideoUri?: string | null | undefined, classVideoThumbUri?: string | null | undefined, classAudioUri?: string | null | undefined, WorkoutSectionType: { __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }, WorkoutSets: Array<{ __typename: 'WorkoutSet', id: string, sortPosition: number, duration: number, WorkoutMoves: Array<{ __typename: 'WorkoutMove', id: string, sortPosition: number, reps: number, repType: WorkoutMoveRepType, distanceUnit: DistanceUnit, loadAmount: number, loadUnit: LoadUnit, timeUnit: TimeUnit, Equipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined, Move: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }>, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> } }> }> }> } };

export type AdminPublicWorkoutPlanByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AdminPublicWorkoutPlanByIdQuery = { __typename?: 'Query', adminPublicWorkoutPlanById: { __typename: 'WorkoutPlanWithMetaDataAdmin', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthWeeks: number, daysPerWeek: number, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, difficultyLevel?: DifficultyLevel | null | undefined, metaTags: Array<string>, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutPlanDays: Array<{ __typename: 'WorkoutPlanDay', id: string, note?: string | null | undefined, dayNumber: number, WorkoutPlanDayWorkouts: Array<{ __typename: 'WorkoutPlanDayWorkout', id: string, note?: string | null | undefined, sortPosition: number, Workout: { __typename: 'Workout', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, contentAccessScope: ContentAccessScope, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutGoals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutSections: Array<{ __typename: 'WorkoutSection', id: string, name?: string | null | undefined, note?: string | null | undefined, rounds: number, timecap: number, sortPosition: number, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, classVideoUri?: string | null | undefined, classVideoThumbUri?: string | null | undefined, classAudioUri?: string | null | undefined, WorkoutSectionType: { __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }, WorkoutSets: Array<{ __typename: 'WorkoutSet', id: string, sortPosition: number, duration: number, WorkoutMoves: Array<{ __typename: 'WorkoutMove', id: string, sortPosition: number, reps: number, repType: WorkoutMoveRepType, distanceUnit: DistanceUnit, loadAmount: number, loadUnit: LoadUnit, timeUnit: TimeUnit, Equipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined, Move: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }>, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> } }> }> }> } }> }>, WorkoutPlanReviews: Array<{ __typename: 'WorkoutPlanReview', id: string, createdAt: any, score: number, comment?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string } }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutPlanEnrolments: Array<{ __typename: 'WorkoutPlanEnrolment', id: string, startDate?: any | null | undefined, CompletedWorkoutPlanDayWorkouts: Array<{ __typename: 'CompletedWorkoutPlanDayWorkout', id: string, loggedWorkoutId: string, workoutPlanDayWorkoutId: string }>, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string } }> } };

export type AdminPublicClubCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminPublicClubCountsQuery = { __typename?: 'Query', adminPublicClubCounts: { __typename: 'PublicClubCountsAdmin', pending: number, valid: number, invalid: number } };

export type AdminPublicWorkoutPlanCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminPublicWorkoutPlanCountsQuery = { __typename?: 'Query', adminPublicWorkoutPlanCounts: { __typename: 'PublicWorkoutPlanCountsAdmin', pending: number, valid: number, invalid: number } };

export type AdminPublicWorkoutCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminPublicWorkoutCountsQuery = { __typename?: 'Query', adminPublicWorkoutCounts: { __typename: 'PublicWorkoutCountsAdmin', pending: number, valid: number, invalid: number } };

export type UpdateClubMetaDataAdminMutationVariables = Exact<{
  data: UpdateClubMetaDataAdminInput;
}>;


export type UpdateClubMetaDataAdminMutation = { __typename?: 'Mutation', updateClubMetaDataAdmin: { __typename: 'ClubWithMetaDataAdmin', id: string, createdAt: any, name: string, description?: string | null | undefined, location?: string | null | undefined, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, metaTags: Array<string>, Owner: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, Admins: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }>, Members: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }> } };

export type UpdateWorkoutMetaDataAdminMutationVariables = Exact<{
  data: UpdateWorkoutMetaDataAdminInput;
}>;


export type UpdateWorkoutMetaDataAdminMutation = { __typename?: 'Mutation', updateWorkoutMetaDataAdmin: { __typename: 'WorkoutWithMetaDataAdmin', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, contentAccessScope: ContentAccessScope, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, difficultyLevel?: DifficultyLevel | null | undefined, metaTags: Array<string>, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutGoals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutSections: Array<{ __typename: 'WorkoutSection', id: string, name?: string | null | undefined, note?: string | null | undefined, rounds: number, timecap: number, sortPosition: number, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, classVideoUri?: string | null | undefined, classVideoThumbUri?: string | null | undefined, classAudioUri?: string | null | undefined, WorkoutSectionType: { __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }, WorkoutSets: Array<{ __typename: 'WorkoutSet', id: string, sortPosition: number, duration: number, WorkoutMoves: Array<{ __typename: 'WorkoutMove', id: string, sortPosition: number, reps: number, repType: WorkoutMoveRepType, distanceUnit: DistanceUnit, loadAmount: number, loadUnit: LoadUnit, timeUnit: TimeUnit, Equipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined, Move: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }>, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> } }> }> }> } };

export type UpdateWorkoutPlanMetaDataAdminMutationVariables = Exact<{
  data: UpdateWorkoutPlanMetaDataAdminInput;
}>;


export type UpdateWorkoutPlanMetaDataAdminMutation = { __typename?: 'Mutation', updateWorkoutPlanMetaDataAdmin?: { __typename: 'WorkoutPlanWithMetaDataAdmin', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthWeeks: number, daysPerWeek: number, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, difficultyLevel?: DifficultyLevel | null | undefined, metaTags: Array<string>, validated: PublicContentValidationStatus, reasonNotValidated?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutPlanDays: Array<{ __typename: 'WorkoutPlanDay', id: string, note?: string | null | undefined, dayNumber: number, WorkoutPlanDayWorkouts: Array<{ __typename: 'WorkoutPlanDayWorkout', id: string, note?: string | null | undefined, sortPosition: number, Workout: { __typename: 'Workout', id: string, createdAt: any, updatedAt: any, archived: boolean, name: string, description?: string | null | undefined, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, contentAccessScope: ContentAccessScope, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, WorkoutGoals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutSections: Array<{ __typename: 'WorkoutSection', id: string, name?: string | null | undefined, note?: string | null | undefined, rounds: number, timecap: number, sortPosition: number, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, classVideoUri?: string | null | undefined, classVideoThumbUri?: string | null | undefined, classAudioUri?: string | null | undefined, WorkoutSectionType: { __typename: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }, WorkoutSets: Array<{ __typename: 'WorkoutSet', id: string, sortPosition: number, duration: number, WorkoutMoves: Array<{ __typename: 'WorkoutMove', id: string, sortPosition: number, reps: number, repType: WorkoutMoveRepType, distanceUnit: DistanceUnit, loadAmount: number, loadUnit: LoadUnit, timeUnit: TimeUnit, Equipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined, Move: { __typename: 'Move', id: string, archived: boolean, name: string, searchTerms?: string | null | undefined, description?: string | null | undefined, demoVideoUri?: string | null | undefined, demoVideoThumbUri?: string | null | undefined, scope: MoveScope, validRepTypes: Array<WorkoutMoveRepType>, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }>, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> } }> }> }> } }> }>, WorkoutPlanReviews: Array<{ __typename: 'WorkoutPlanReview', id: string, createdAt: any, score: number, comment?: string | null | undefined, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string } }>, WorkoutTags: Array<{ __typename: 'WorkoutTag', id: string, tag: string }>, WorkoutPlanEnrolments: Array<{ __typename: 'WorkoutPlanEnrolment', id: string, startDate?: any | null | undefined, CompletedWorkoutPlanDayWorkouts: Array<{ __typename: 'CompletedWorkoutPlanDayWorkout', id: string, loggedWorkoutId: string, workoutPlanDayWorkoutId: string }>, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string } }> } | null | undefined };

export type AdminPublicClubSummariesQueryVariables = Exact<{
  status: PublicContentValidationStatus;
}>;


export type AdminPublicClubSummariesQuery = { __typename?: 'Query', adminPublicClubSummaries: Array<{ __typename: 'PublicClubSummaryAdmin', id: string, createdAt: any, name: string }> };

export type AdminPublicWorkoutPlanSummariesQueryVariables = Exact<{
  status: PublicContentValidationStatus;
}>;


export type AdminPublicWorkoutPlanSummariesQuery = { __typename?: 'Query', adminPublicWorkoutPlanSummaries: Array<{ __typename: 'PublicWorkoutPlanSummaryAdmin', id: string, createdAt: any, updatedAt: any, name: string }> };

export type AdminPublicWorkoutSummariesQueryVariables = Exact<{
  status: PublicContentValidationStatus;
}>;


export type AdminPublicWorkoutSummariesQuery = { __typename?: 'Query', adminPublicWorkoutSummaries: Array<{ __typename: 'PublicWorkoutSummaryAdmin', id: string, createdAt: any, updatedAt: any, name: string }> };

export const UserAvatarDataFragmentDoc = gql`
    fragment UserAvatarData on UserAvatarData {
  __typename
  id
  avatarUri
  displayName
}
    `;
export const ClubWithMetaDataAdminDataFragmentDoc = gql`
    fragment ClubWithMetaDataAdminData on ClubWithMetaDataAdmin {
  __typename
  id
  createdAt
  name
  description
  location
  coverImageUri
  introVideoUri
  introVideoThumbUri
  introAudioUri
  contentAccessScope
  validated
  reasonNotValidated
  metaTags
  Owner {
    ...UserAvatarData
  }
  Admins {
    ...UserAvatarData
  }
  Members {
    ...UserAvatarData
  }
}
    ${UserAvatarDataFragmentDoc}`;
export const ClubSummaryFragmentDoc = gql`
    fragment ClubSummary on ClubSummary {
  __typename
  id
  createdAt
  name
  description
  coverImageUri
  introVideoUri
  introVideoThumbUri
  introAudioUri
  contentAccessScope
  location
  memberCount
  workoutCount
  planCount
}
    `;
export const PublicClubSummaryAdminFragmentDoc = gql`
    fragment PublicClubSummaryAdmin on PublicClubSummaryAdmin {
  __typename
  id
  createdAt
  name
}
    `;
export const ClubMemberNoteFragmentDoc = gql`
    fragment ClubMemberNote on ClubMemberNote {
  __typename
  id
  createdAt
  note
  tags
}
    `;
export const ClubChatSummaryFragmentDoc = gql`
    fragment ClubChatSummary on ClubChatSummary {
  id
  name
  coverImageUri
  Owner {
    ...UserAvatarData
  }
  Admins {
    ...UserAvatarData
  }
  Members {
    ...UserAvatarData
  }
}
    ${UserAvatarDataFragmentDoc}`;
export const ClubMemberSummaryFragmentDoc = gql`
    fragment ClubMemberSummary on ClubMemberSummary {
  __typename
  id
  displayName
  avatarUri
  townCity
  countryCode
  tagline
  skills
}
    `;
export const ClubInviteTokenFragmentDoc = gql`
    fragment ClubInviteToken on ClubInviteToken {
  __typename
  id
  createdAt
  name
  active
  inviteLimit
  joinedUserIds
}
    `;
export const FitnessBenchmarkCategoryFragmentDoc = gql`
    fragment FitnessBenchmarkCategory on FitnessBenchmarkCategory {
  __typename
  id
  createdAt
  name
  description
}
    `;
export const FitnessBenchmarkFragmentDoc = gql`
    fragment FitnessBenchmark on FitnessBenchmark {
  __typename
  id
  createdAt
  scope
  type
  name
  description
  instructions
  instructionalVideoUri
  instructionalVideoThumbUri
}
    `;
export const FitnessBenchmarkScoreFragmentDoc = gql`
    fragment FitnessBenchmarkScore on FitnessBenchmarkScore {
  __typename
  id
  createdAt
  completedOn
  score
  note
  videoUri
  videoThumbUri
}
    `;
export const FitnessBenchmarkWorkoutFragmentDoc = gql`
    fragment FitnessBenchmarkWorkout on FitnessBenchmarkWorkout {
  __typename
  id
  createdAt
  scope
  type
  name
  description
  instructions
  instructionalVideoUri
  instructionalVideoThumbUri
  rounds
  moveDescriptions
  pointsForMoveCompleted
}
    `;
export const FitnessBenchmarkWorkoutScoreFragmentDoc = gql`
    fragment FitnessBenchmarkWorkoutScore on FitnessBenchmarkWorkoutScore {
  __typename
  id
  createdAt
  completedOn
  score
  note
}
    `;
export const ProgressWidgetFragmentDoc = gql`
    fragment ProgressWidget on ProgressWidget {
  __typename
  id
  createdAt
  name
  subtitle
  description
}
    `;
export const UserProfileSummaryFragmentDoc = gql`
    fragment UserProfileSummary on UserProfileSummary {
  __typename
  userProfileScope
  id
  avatarUri
  tagline
  townCity
  countryCode
  displayName
  workoutCount
  planCount
  skills
}
    `;
export const WorkoutGoalFragmentDoc = gql`
    fragment WorkoutGoal on WorkoutGoal {
  __typename
  id
  name
  description
  hexColor
}
    `;
export const WorkoutTagFragmentDoc = gql`
    fragment WorkoutTag on WorkoutTag {
  __typename
  id
  tag
}
    `;
export const WorkoutSectionFragmentDoc = gql`
    fragment WorkoutSection on WorkoutSection {
  __typename
  id
  name
  note
  rounds
  timecap
  sortPosition
  introVideoUri
  introVideoThumbUri
  introAudioUri
  classVideoUri
  classVideoThumbUri
  classAudioUri
}
    `;
export const WorkoutSectionTypeFragmentDoc = gql`
    fragment WorkoutSectionType on WorkoutSectionType {
  __typename
  id
  name
  subtitle
  description
  validRepTypes
}
    `;
export const WorkoutSetFragmentDoc = gql`
    fragment WorkoutSet on WorkoutSet {
  __typename
  id
  sortPosition
  duration
}
    `;
export const WorkoutMoveFragmentDoc = gql`
    fragment WorkoutMove on WorkoutMove {
  __typename
  id
  sortPosition
  reps
  repType
  distanceUnit
  loadAmount
  loadUnit
  timeUnit
}
    `;
export const EquipmentFragmentDoc = gql`
    fragment Equipment on Equipment {
  __typename
  id
  name
  altNames
  loadAdjustable
}
    `;
export const MoveFragmentDoc = gql`
    fragment Move on Move {
  __typename
  id
  archived
  name
  searchTerms
  description
  demoVideoUri
  demoVideoThumbUri
  scope
  validRepTypes
}
    `;
export const MoveTypeFragmentDoc = gql`
    fragment MoveType on MoveType {
  __typename
  id
  name
  description
  imageUri
}
    `;
export const BodyAreaFragmentDoc = gql`
    fragment BodyArea on BodyArea {
  __typename
  id
  name
  altNames
  frontBack
  upperLower
}
    `;
export const WorkoutWithMetaDataAdminDataFragmentDoc = gql`
    fragment WorkoutWithMetaDataAdminData on WorkoutWithMetaDataAdmin {
  __typename
  id
  createdAt
  updatedAt
  archived
  name
  description
  lengthMinutes
  coverImageUri
  contentAccessScope
  introVideoUri
  introVideoThumbUri
  introAudioUri
  User {
    ...UserAvatarData
  }
  WorkoutGoals {
    ...WorkoutGoal
  }
  WorkoutTags {
    ...WorkoutTag
  }
  WorkoutSections {
    ...WorkoutSection
    WorkoutSectionType {
      ...WorkoutSectionType
    }
    WorkoutSets {
      ...WorkoutSet
      WorkoutMoves {
        ...WorkoutMove
        Equipment {
          ...Equipment
        }
        Move {
          ...Move
          MoveType {
            ...MoveType
          }
          BodyAreaMoveScores {
            score
            BodyArea {
              ...BodyArea
            }
          }
          RequiredEquipments {
            ...Equipment
          }
          SelectableEquipments {
            ...Equipment
          }
        }
      }
    }
  }
  difficultyLevel
  metaTags
  validated
  reasonNotValidated
}
    ${UserAvatarDataFragmentDoc}
${WorkoutGoalFragmentDoc}
${WorkoutTagFragmentDoc}
${WorkoutSectionFragmentDoc}
${WorkoutSectionTypeFragmentDoc}
${WorkoutSetFragmentDoc}
${WorkoutMoveFragmentDoc}
${EquipmentFragmentDoc}
${MoveFragmentDoc}
${MoveTypeFragmentDoc}
${BodyAreaFragmentDoc}`;
export const PublicWorkoutSummaryAdminFragmentDoc = gql`
    fragment PublicWorkoutSummaryAdmin on PublicWorkoutSummaryAdmin {
  __typename
  id
  createdAt
  updatedAt
  name
}
    `;
export const ArchivedWorkoutFragmentDoc = gql`
    fragment ArchivedWorkout on Workout {
  __typename
  id
  name
  archived
}
    `;
export const WorkoutPlanDayFragmentDoc = gql`
    fragment WorkoutPlanDay on WorkoutPlanDay {
  id
  __typename
  note
  dayNumber
}
    `;
export const WorkoutPlanDayWorkoutFragmentDoc = gql`
    fragment WorkoutPlanDayWorkout on WorkoutPlanDayWorkout {
  id
  __typename
  note
  sortPosition
}
    `;
export const WorkoutDataFragmentDoc = gql`
    fragment WorkoutData on Workout {
  __typename
  id
  createdAt
  updatedAt
  archived
  name
  description
  lengthMinutes
  coverImageUri
  contentAccessScope
  introVideoUri
  introVideoThumbUri
  introAudioUri
  User {
    ...UserAvatarData
  }
  WorkoutGoals {
    ...WorkoutGoal
  }
  WorkoutTags {
    ...WorkoutTag
  }
  WorkoutSections {
    ...WorkoutSection
    WorkoutSectionType {
      ...WorkoutSectionType
    }
    WorkoutSets {
      ...WorkoutSet
      WorkoutMoves {
        ...WorkoutMove
        Equipment {
          ...Equipment
        }
        Move {
          ...Move
          MoveType {
            ...MoveType
          }
          BodyAreaMoveScores {
            score
            BodyArea {
              ...BodyArea
            }
          }
          RequiredEquipments {
            ...Equipment
          }
          SelectableEquipments {
            ...Equipment
          }
        }
      }
    }
  }
}
    ${UserAvatarDataFragmentDoc}
${WorkoutGoalFragmentDoc}
${WorkoutTagFragmentDoc}
${WorkoutSectionFragmentDoc}
${WorkoutSectionTypeFragmentDoc}
${WorkoutSetFragmentDoc}
${WorkoutMoveFragmentDoc}
${EquipmentFragmentDoc}
${MoveFragmentDoc}
${MoveTypeFragmentDoc}
${BodyAreaFragmentDoc}`;
export const WorkoutPlanReviewFragmentDoc = gql`
    fragment WorkoutPlanReview on WorkoutPlanReview {
  id
  __typename
  createdAt
  score
  comment
}
    `;
export const WorkoutPlanEnrolmentFragmentDoc = gql`
    fragment WorkoutPlanEnrolment on WorkoutPlanEnrolment {
  __typename
  id
  startDate
}
    `;
export const CompletedWorkoutPlanDayWorkoutFragmentDoc = gql`
    fragment CompletedWorkoutPlanDayWorkout on CompletedWorkoutPlanDayWorkout {
  __typename
  id
  loggedWorkoutId
  workoutPlanDayWorkoutId
}
    `;
export const WorkoutPlanWithMetaDataAdminDataFragmentDoc = gql`
    fragment WorkoutPlanWithMetaDataAdminData on WorkoutPlanWithMetaDataAdmin {
  __typename
  id
  createdAt
  updatedAt
  archived
  name
  description
  lengthWeeks
  daysPerWeek
  coverImageUri
  introVideoUri
  introVideoThumbUri
  introAudioUri
  contentAccessScope
  User {
    ...UserAvatarData
  }
  WorkoutPlanDays {
    ...WorkoutPlanDay
    WorkoutPlanDayWorkouts {
      ...WorkoutPlanDayWorkout
      Workout {
        ...WorkoutData
      }
    }
  }
  WorkoutPlanReviews {
    ...WorkoutPlanReview
    User {
      ...UserAvatarData
    }
  }
  WorkoutTags {
    ...WorkoutTag
  }
  WorkoutPlanEnrolments {
    ...WorkoutPlanEnrolment
    CompletedWorkoutPlanDayWorkouts {
      ...CompletedWorkoutPlanDayWorkout
    }
    User {
      ...UserAvatarData
    }
  }
  difficultyLevel
  metaTags
  validated
  reasonNotValidated
}
    ${UserAvatarDataFragmentDoc}
${WorkoutPlanDayFragmentDoc}
${WorkoutPlanDayWorkoutFragmentDoc}
${WorkoutDataFragmentDoc}
${WorkoutPlanReviewFragmentDoc}
${WorkoutTagFragmentDoc}
${WorkoutPlanEnrolmentFragmentDoc}
${CompletedWorkoutPlanDayWorkoutFragmentDoc}`;
export const PublicWorkoutPlanSummaryAdminFragmentDoc = gql`
    fragment PublicWorkoutPlanSummaryAdmin on PublicWorkoutPlanSummaryAdmin {
  __typename
  id
  createdAt
  updatedAt
  name
}
    `;
export const AdminAllUsersDocument = gql`
    query adminAllUsers {
  adminAllUsers {
    ...UserProfileSummary
    Clubs {
      ...ClubSummary
      Owner {
        ...UserAvatarData
      }
      Admins {
        ...UserAvatarData
      }
    }
  }
}
    ${UserProfileSummaryFragmentDoc}
${ClubSummaryFragmentDoc}
${UserAvatarDataFragmentDoc}`;

/**
 * __useAdminAllUsersQuery__
 *
 * To run a query within a React component, call `useAdminAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AdminAllUsersQuery, AdminAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminAllUsersQuery, AdminAllUsersQueryVariables>(AdminAllUsersDocument, options);
      }
export function useAdminAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminAllUsersQuery, AdminAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminAllUsersQuery, AdminAllUsersQueryVariables>(AdminAllUsersDocument, options);
        }
export type AdminAllUsersQueryHookResult = ReturnType<typeof useAdminAllUsersQuery>;
export type AdminAllUsersLazyQueryHookResult = ReturnType<typeof useAdminAllUsersLazyQuery>;
export type AdminAllUsersQueryResult = Apollo.QueryResult<AdminAllUsersQuery, AdminAllUsersQueryVariables>;
export const CoreDataDocument = gql`
    query coreData {
  coreData {
    __typename
    bodyAreas {
      ...BodyArea
    }
    equipment {
      ...Equipment
    }
    moveTypes {
      ...MoveType
    }
    workoutGoals {
      ...WorkoutGoal
    }
    workoutSectionTypes {
      ...WorkoutSectionType
    }
    standardMoves {
      ...Move
      MoveType {
        ...MoveType
      }
      BodyAreaMoveScores {
        score
        BodyArea {
          ...BodyArea
        }
      }
      RequiredEquipments {
        ...Equipment
      }
      SelectableEquipments {
        ...Equipment
      }
    }
    progressWidgets {
      ...ProgressWidget
    }
    fitnessBenchmarkCategories {
      ...FitnessBenchmarkCategory
    }
  }
}
    ${BodyAreaFragmentDoc}
${EquipmentFragmentDoc}
${MoveTypeFragmentDoc}
${WorkoutGoalFragmentDoc}
${WorkoutSectionTypeFragmentDoc}
${MoveFragmentDoc}
${ProgressWidgetFragmentDoc}
${FitnessBenchmarkCategoryFragmentDoc}`;

/**
 * __useCoreDataQuery__
 *
 * To run a query within a React component, call `useCoreDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoreDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoreDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useCoreDataQuery(baseOptions?: Apollo.QueryHookOptions<CoreDataQuery, CoreDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoreDataQuery, CoreDataQueryVariables>(CoreDataDocument, options);
      }
export function useCoreDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoreDataQuery, CoreDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoreDataQuery, CoreDataQueryVariables>(CoreDataDocument, options);
        }
export type CoreDataQueryHookResult = ReturnType<typeof useCoreDataQuery>;
export type CoreDataLazyQueryHookResult = ReturnType<typeof useCoreDataLazyQuery>;
export type CoreDataQueryResult = Apollo.QueryResult<CoreDataQuery, CoreDataQueryVariables>;
export const CreateEquipmentDocument = gql`
    mutation createEquipment($data: CreateEquipmentInput!) {
  createEquipment(data: $data) {
    ...Equipment
  }
}
    ${EquipmentFragmentDoc}`;
export type CreateEquipmentMutationFn = Apollo.MutationFunction<CreateEquipmentMutation, CreateEquipmentMutationVariables>;

/**
 * __useCreateEquipmentMutation__
 *
 * To run a mutation, you first call `useCreateEquipmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEquipmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEquipmentMutation, { data, loading, error }] = useCreateEquipmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateEquipmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateEquipmentMutation, CreateEquipmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEquipmentMutation, CreateEquipmentMutationVariables>(CreateEquipmentDocument, options);
      }
export type CreateEquipmentMutationHookResult = ReturnType<typeof useCreateEquipmentMutation>;
export type CreateEquipmentMutationResult = Apollo.MutationResult<CreateEquipmentMutation>;
export type CreateEquipmentMutationOptions = Apollo.BaseMutationOptions<CreateEquipmentMutation, CreateEquipmentMutationVariables>;
export const UpdateEquipmentDocument = gql`
    mutation updateEquipment($data: UpdateEquipmentInput!) {
  updateEquipment(data: $data) {
    ...Equipment
  }
}
    ${EquipmentFragmentDoc}`;
export type UpdateEquipmentMutationFn = Apollo.MutationFunction<UpdateEquipmentMutation, UpdateEquipmentMutationVariables>;

/**
 * __useUpdateEquipmentMutation__
 *
 * To run a mutation, you first call `useUpdateEquipmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEquipmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEquipmentMutation, { data, loading, error }] = useUpdateEquipmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateEquipmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEquipmentMutation, UpdateEquipmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEquipmentMutation, UpdateEquipmentMutationVariables>(UpdateEquipmentDocument, options);
      }
export type UpdateEquipmentMutationHookResult = ReturnType<typeof useUpdateEquipmentMutation>;
export type UpdateEquipmentMutationResult = Apollo.MutationResult<UpdateEquipmentMutation>;
export type UpdateEquipmentMutationOptions = Apollo.BaseMutationOptions<UpdateEquipmentMutation, UpdateEquipmentMutationVariables>;
export const AdminStandardFitnessBenchmarkWorkoutsDocument = gql`
    query adminStandardFitnessBenchmarkWorkouts {
  adminStandardFitnessBenchmarkWorkouts {
    ...FitnessBenchmarkWorkout
    FitnessBenchmarkWorkoutScores {
      ...FitnessBenchmarkWorkoutScore
    }
  }
}
    ${FitnessBenchmarkWorkoutFragmentDoc}
${FitnessBenchmarkWorkoutScoreFragmentDoc}`;

/**
 * __useAdminStandardFitnessBenchmarkWorkoutsQuery__
 *
 * To run a query within a React component, call `useAdminStandardFitnessBenchmarkWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminStandardFitnessBenchmarkWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminStandardFitnessBenchmarkWorkoutsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminStandardFitnessBenchmarkWorkoutsQuery(baseOptions?: Apollo.QueryHookOptions<AdminStandardFitnessBenchmarkWorkoutsQuery, AdminStandardFitnessBenchmarkWorkoutsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminStandardFitnessBenchmarkWorkoutsQuery, AdminStandardFitnessBenchmarkWorkoutsQueryVariables>(AdminStandardFitnessBenchmarkWorkoutsDocument, options);
      }
export function useAdminStandardFitnessBenchmarkWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminStandardFitnessBenchmarkWorkoutsQuery, AdminStandardFitnessBenchmarkWorkoutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminStandardFitnessBenchmarkWorkoutsQuery, AdminStandardFitnessBenchmarkWorkoutsQueryVariables>(AdminStandardFitnessBenchmarkWorkoutsDocument, options);
        }
export type AdminStandardFitnessBenchmarkWorkoutsQueryHookResult = ReturnType<typeof useAdminStandardFitnessBenchmarkWorkoutsQuery>;
export type AdminStandardFitnessBenchmarkWorkoutsLazyQueryHookResult = ReturnType<typeof useAdminStandardFitnessBenchmarkWorkoutsLazyQuery>;
export type AdminStandardFitnessBenchmarkWorkoutsQueryResult = Apollo.QueryResult<AdminStandardFitnessBenchmarkWorkoutsQuery, AdminStandardFitnessBenchmarkWorkoutsQueryVariables>;
export const AdminStandardFitnessBenchmarksDocument = gql`
    query adminStandardFitnessBenchmarks {
  adminStandardFitnessBenchmarks {
    ...FitnessBenchmark
    FitnessBenchmarkCategory {
      ...FitnessBenchmarkCategory
    }
    FitnessBenchmarkScores {
      ...FitnessBenchmarkScore
    }
  }
}
    ${FitnessBenchmarkFragmentDoc}
${FitnessBenchmarkCategoryFragmentDoc}
${FitnessBenchmarkScoreFragmentDoc}`;

/**
 * __useAdminStandardFitnessBenchmarksQuery__
 *
 * To run a query within a React component, call `useAdminStandardFitnessBenchmarksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminStandardFitnessBenchmarksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminStandardFitnessBenchmarksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminStandardFitnessBenchmarksQuery(baseOptions?: Apollo.QueryHookOptions<AdminStandardFitnessBenchmarksQuery, AdminStandardFitnessBenchmarksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminStandardFitnessBenchmarksQuery, AdminStandardFitnessBenchmarksQueryVariables>(AdminStandardFitnessBenchmarksDocument, options);
      }
export function useAdminStandardFitnessBenchmarksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminStandardFitnessBenchmarksQuery, AdminStandardFitnessBenchmarksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminStandardFitnessBenchmarksQuery, AdminStandardFitnessBenchmarksQueryVariables>(AdminStandardFitnessBenchmarksDocument, options);
        }
export type AdminStandardFitnessBenchmarksQueryHookResult = ReturnType<typeof useAdminStandardFitnessBenchmarksQuery>;
export type AdminStandardFitnessBenchmarksLazyQueryHookResult = ReturnType<typeof useAdminStandardFitnessBenchmarksLazyQuery>;
export type AdminStandardFitnessBenchmarksQueryResult = Apollo.QueryResult<AdminStandardFitnessBenchmarksQuery, AdminStandardFitnessBenchmarksQueryVariables>;
export const CreateFitnessBenchmarkDocument = gql`
    mutation createFitnessBenchmark($data: CreateFitnessBenchmarkInput!) {
  createFitnessBenchmark(data: $data) {
    ...FitnessBenchmark
    FitnessBenchmarkCategory {
      ...FitnessBenchmarkCategory
    }
  }
}
    ${FitnessBenchmarkFragmentDoc}
${FitnessBenchmarkCategoryFragmentDoc}`;
export type CreateFitnessBenchmarkMutationFn = Apollo.MutationFunction<CreateFitnessBenchmarkMutation, CreateFitnessBenchmarkMutationVariables>;

/**
 * __useCreateFitnessBenchmarkMutation__
 *
 * To run a mutation, you first call `useCreateFitnessBenchmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFitnessBenchmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFitnessBenchmarkMutation, { data, loading, error }] = useCreateFitnessBenchmarkMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFitnessBenchmarkMutation(baseOptions?: Apollo.MutationHookOptions<CreateFitnessBenchmarkMutation, CreateFitnessBenchmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFitnessBenchmarkMutation, CreateFitnessBenchmarkMutationVariables>(CreateFitnessBenchmarkDocument, options);
      }
export type CreateFitnessBenchmarkMutationHookResult = ReturnType<typeof useCreateFitnessBenchmarkMutation>;
export type CreateFitnessBenchmarkMutationResult = Apollo.MutationResult<CreateFitnessBenchmarkMutation>;
export type CreateFitnessBenchmarkMutationOptions = Apollo.BaseMutationOptions<CreateFitnessBenchmarkMutation, CreateFitnessBenchmarkMutationVariables>;
export const CreateFitnessBenchmarkWorkoutDocument = gql`
    mutation createFitnessBenchmarkWorkout($data: CreateFitnessBenchmarkWorkoutInput!) {
  createFitnessBenchmarkWorkout(data: $data) {
    ...FitnessBenchmarkWorkout
  }
}
    ${FitnessBenchmarkWorkoutFragmentDoc}`;
export type CreateFitnessBenchmarkWorkoutMutationFn = Apollo.MutationFunction<CreateFitnessBenchmarkWorkoutMutation, CreateFitnessBenchmarkWorkoutMutationVariables>;

/**
 * __useCreateFitnessBenchmarkWorkoutMutation__
 *
 * To run a mutation, you first call `useCreateFitnessBenchmarkWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFitnessBenchmarkWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFitnessBenchmarkWorkoutMutation, { data, loading, error }] = useCreateFitnessBenchmarkWorkoutMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFitnessBenchmarkWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<CreateFitnessBenchmarkWorkoutMutation, CreateFitnessBenchmarkWorkoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFitnessBenchmarkWorkoutMutation, CreateFitnessBenchmarkWorkoutMutationVariables>(CreateFitnessBenchmarkWorkoutDocument, options);
      }
export type CreateFitnessBenchmarkWorkoutMutationHookResult = ReturnType<typeof useCreateFitnessBenchmarkWorkoutMutation>;
export type CreateFitnessBenchmarkWorkoutMutationResult = Apollo.MutationResult<CreateFitnessBenchmarkWorkoutMutation>;
export type CreateFitnessBenchmarkWorkoutMutationOptions = Apollo.BaseMutationOptions<CreateFitnessBenchmarkWorkoutMutation, CreateFitnessBenchmarkWorkoutMutationVariables>;
export const DeleteFitnessBenchmarkDocument = gql`
    mutation deleteFitnessBenchmark($id: ID!) {
  deleteFitnessBenchmark(id: $id)
}
    `;
export type DeleteFitnessBenchmarkMutationFn = Apollo.MutationFunction<DeleteFitnessBenchmarkMutation, DeleteFitnessBenchmarkMutationVariables>;

/**
 * __useDeleteFitnessBenchmarkMutation__
 *
 * To run a mutation, you first call `useDeleteFitnessBenchmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFitnessBenchmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFitnessBenchmarkMutation, { data, loading, error }] = useDeleteFitnessBenchmarkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFitnessBenchmarkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFitnessBenchmarkMutation, DeleteFitnessBenchmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFitnessBenchmarkMutation, DeleteFitnessBenchmarkMutationVariables>(DeleteFitnessBenchmarkDocument, options);
      }
export type DeleteFitnessBenchmarkMutationHookResult = ReturnType<typeof useDeleteFitnessBenchmarkMutation>;
export type DeleteFitnessBenchmarkMutationResult = Apollo.MutationResult<DeleteFitnessBenchmarkMutation>;
export type DeleteFitnessBenchmarkMutationOptions = Apollo.BaseMutationOptions<DeleteFitnessBenchmarkMutation, DeleteFitnessBenchmarkMutationVariables>;
export const DeleteFitnessBenchmarkWorkoutDocument = gql`
    mutation deleteFitnessBenchmarkWorkout($id: ID!) {
  deleteFitnessBenchmarkWorkout(id: $id)
}
    `;
export type DeleteFitnessBenchmarkWorkoutMutationFn = Apollo.MutationFunction<DeleteFitnessBenchmarkWorkoutMutation, DeleteFitnessBenchmarkWorkoutMutationVariables>;

/**
 * __useDeleteFitnessBenchmarkWorkoutMutation__
 *
 * To run a mutation, you first call `useDeleteFitnessBenchmarkWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFitnessBenchmarkWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFitnessBenchmarkWorkoutMutation, { data, loading, error }] = useDeleteFitnessBenchmarkWorkoutMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFitnessBenchmarkWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFitnessBenchmarkWorkoutMutation, DeleteFitnessBenchmarkWorkoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFitnessBenchmarkWorkoutMutation, DeleteFitnessBenchmarkWorkoutMutationVariables>(DeleteFitnessBenchmarkWorkoutDocument, options);
      }
export type DeleteFitnessBenchmarkWorkoutMutationHookResult = ReturnType<typeof useDeleteFitnessBenchmarkWorkoutMutation>;
export type DeleteFitnessBenchmarkWorkoutMutationResult = Apollo.MutationResult<DeleteFitnessBenchmarkWorkoutMutation>;
export type DeleteFitnessBenchmarkWorkoutMutationOptions = Apollo.BaseMutationOptions<DeleteFitnessBenchmarkWorkoutMutation, DeleteFitnessBenchmarkWorkoutMutationVariables>;
export const UpdateFitnessBenchmarkWorkoutDocument = gql`
    mutation updateFitnessBenchmarkWorkout($data: UpdateFitnessBenchmarkWorkoutInput!) {
  updateFitnessBenchmarkWorkout(data: $data) {
    ...FitnessBenchmarkWorkout
  }
}
    ${FitnessBenchmarkWorkoutFragmentDoc}`;
export type UpdateFitnessBenchmarkWorkoutMutationFn = Apollo.MutationFunction<UpdateFitnessBenchmarkWorkoutMutation, UpdateFitnessBenchmarkWorkoutMutationVariables>;

/**
 * __useUpdateFitnessBenchmarkWorkoutMutation__
 *
 * To run a mutation, you first call `useUpdateFitnessBenchmarkWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFitnessBenchmarkWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFitnessBenchmarkWorkoutMutation, { data, loading, error }] = useUpdateFitnessBenchmarkWorkoutMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateFitnessBenchmarkWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFitnessBenchmarkWorkoutMutation, UpdateFitnessBenchmarkWorkoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFitnessBenchmarkWorkoutMutation, UpdateFitnessBenchmarkWorkoutMutationVariables>(UpdateFitnessBenchmarkWorkoutDocument, options);
      }
export type UpdateFitnessBenchmarkWorkoutMutationHookResult = ReturnType<typeof useUpdateFitnessBenchmarkWorkoutMutation>;
export type UpdateFitnessBenchmarkWorkoutMutationResult = Apollo.MutationResult<UpdateFitnessBenchmarkWorkoutMutation>;
export type UpdateFitnessBenchmarkWorkoutMutationOptions = Apollo.BaseMutationOptions<UpdateFitnessBenchmarkWorkoutMutation, UpdateFitnessBenchmarkWorkoutMutationVariables>;
export const UpdateFitnessBenchmarkDocument = gql`
    mutation updateFitnessBenchmark($data: UpdateFitnessBenchmarkInput!) {
  updateFitnessBenchmark(data: $data) {
    ...FitnessBenchmark
    FitnessBenchmarkCategory {
      ...FitnessBenchmarkCategory
    }
  }
}
    ${FitnessBenchmarkFragmentDoc}
${FitnessBenchmarkCategoryFragmentDoc}`;
export type UpdateFitnessBenchmarkMutationFn = Apollo.MutationFunction<UpdateFitnessBenchmarkMutation, UpdateFitnessBenchmarkMutationVariables>;

/**
 * __useUpdateFitnessBenchmarkMutation__
 *
 * To run a mutation, you first call `useUpdateFitnessBenchmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFitnessBenchmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFitnessBenchmarkMutation, { data, loading, error }] = useUpdateFitnessBenchmarkMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateFitnessBenchmarkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFitnessBenchmarkMutation, UpdateFitnessBenchmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFitnessBenchmarkMutation, UpdateFitnessBenchmarkMutationVariables>(UpdateFitnessBenchmarkDocument, options);
      }
export type UpdateFitnessBenchmarkMutationHookResult = ReturnType<typeof useUpdateFitnessBenchmarkMutation>;
export type UpdateFitnessBenchmarkMutationResult = Apollo.MutationResult<UpdateFitnessBenchmarkMutation>;
export type UpdateFitnessBenchmarkMutationOptions = Apollo.BaseMutationOptions<UpdateFitnessBenchmarkMutation, UpdateFitnessBenchmarkMutationVariables>;
export const CreateMoveDocument = gql`
    mutation createMove($data: CreateMoveInput!) {
  createMove(data: $data) {
    __typename
    ...Move
    MoveType {
      ...MoveType
    }
    RequiredEquipments {
      ...Equipment
    }
    SelectableEquipments {
      ...Equipment
    }
    BodyAreaMoveScores {
      BodyArea {
        ...BodyArea
      }
      score
    }
  }
}
    ${MoveFragmentDoc}
${MoveTypeFragmentDoc}
${EquipmentFragmentDoc}
${BodyAreaFragmentDoc}`;
export type CreateMoveMutationFn = Apollo.MutationFunction<CreateMoveMutation, CreateMoveMutationVariables>;

/**
 * __useCreateMoveMutation__
 *
 * To run a mutation, you first call `useCreateMoveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMoveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMoveMutation, { data, loading, error }] = useCreateMoveMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMoveMutation(baseOptions?: Apollo.MutationHookOptions<CreateMoveMutation, CreateMoveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMoveMutation, CreateMoveMutationVariables>(CreateMoveDocument, options);
      }
export type CreateMoveMutationHookResult = ReturnType<typeof useCreateMoveMutation>;
export type CreateMoveMutationResult = Apollo.MutationResult<CreateMoveMutation>;
export type CreateMoveMutationOptions = Apollo.BaseMutationOptions<CreateMoveMutation, CreateMoveMutationVariables>;
export const UpdateMoveDocument = gql`
    mutation updateMove($data: UpdateMoveInput!) {
  updateMove(data: $data) {
    __typename
    ...Move
    MoveType {
      ...MoveType
    }
    RequiredEquipments {
      ...Equipment
    }
    SelectableEquipments {
      ...Equipment
    }
    BodyAreaMoveScores {
      BodyArea {
        ...BodyArea
      }
      score
    }
  }
}
    ${MoveFragmentDoc}
${MoveTypeFragmentDoc}
${EquipmentFragmentDoc}
${BodyAreaFragmentDoc}`;
export type UpdateMoveMutationFn = Apollo.MutationFunction<UpdateMoveMutation, UpdateMoveMutationVariables>;

/**
 * __useUpdateMoveMutation__
 *
 * To run a mutation, you first call `useUpdateMoveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMoveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMoveMutation, { data, loading, error }] = useUpdateMoveMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMoveMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMoveMutation, UpdateMoveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMoveMutation, UpdateMoveMutationVariables>(UpdateMoveDocument, options);
      }
export type UpdateMoveMutationHookResult = ReturnType<typeof useUpdateMoveMutation>;
export type UpdateMoveMutationResult = Apollo.MutationResult<UpdateMoveMutation>;
export type UpdateMoveMutationOptions = Apollo.BaseMutationOptions<UpdateMoveMutation, UpdateMoveMutationVariables>;
export const AdminPublicClubByIdDocument = gql`
    query adminPublicClubById($id: ID!) {
  adminPublicClubById(id: $id) {
    ...ClubWithMetaDataAdminData
  }
}
    ${ClubWithMetaDataAdminDataFragmentDoc}`;

/**
 * __useAdminPublicClubByIdQuery__
 *
 * To run a query within a React component, call `useAdminPublicClubByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicClubByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicClubByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminPublicClubByIdQuery(baseOptions: Apollo.QueryHookOptions<AdminPublicClubByIdQuery, AdminPublicClubByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicClubByIdQuery, AdminPublicClubByIdQueryVariables>(AdminPublicClubByIdDocument, options);
      }
export function useAdminPublicClubByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicClubByIdQuery, AdminPublicClubByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicClubByIdQuery, AdminPublicClubByIdQueryVariables>(AdminPublicClubByIdDocument, options);
        }
export type AdminPublicClubByIdQueryHookResult = ReturnType<typeof useAdminPublicClubByIdQuery>;
export type AdminPublicClubByIdLazyQueryHookResult = ReturnType<typeof useAdminPublicClubByIdLazyQuery>;
export type AdminPublicClubByIdQueryResult = Apollo.QueryResult<AdminPublicClubByIdQuery, AdminPublicClubByIdQueryVariables>;
export const AdminPublicWorkoutByIdDocument = gql`
    query adminPublicWorkoutById($id: ID!) {
  adminPublicWorkoutById(id: $id) {
    ...WorkoutWithMetaDataAdminData
  }
}
    ${WorkoutWithMetaDataAdminDataFragmentDoc}`;

/**
 * __useAdminPublicWorkoutByIdQuery__
 *
 * To run a query within a React component, call `useAdminPublicWorkoutByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicWorkoutByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicWorkoutByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminPublicWorkoutByIdQuery(baseOptions: Apollo.QueryHookOptions<AdminPublicWorkoutByIdQuery, AdminPublicWorkoutByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicWorkoutByIdQuery, AdminPublicWorkoutByIdQueryVariables>(AdminPublicWorkoutByIdDocument, options);
      }
export function useAdminPublicWorkoutByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicWorkoutByIdQuery, AdminPublicWorkoutByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicWorkoutByIdQuery, AdminPublicWorkoutByIdQueryVariables>(AdminPublicWorkoutByIdDocument, options);
        }
export type AdminPublicWorkoutByIdQueryHookResult = ReturnType<typeof useAdminPublicWorkoutByIdQuery>;
export type AdminPublicWorkoutByIdLazyQueryHookResult = ReturnType<typeof useAdminPublicWorkoutByIdLazyQuery>;
export type AdminPublicWorkoutByIdQueryResult = Apollo.QueryResult<AdminPublicWorkoutByIdQuery, AdminPublicWorkoutByIdQueryVariables>;
export const AdminPublicWorkoutPlanByIdDocument = gql`
    query adminPublicWorkoutPlanById($id: ID!) {
  adminPublicWorkoutPlanById(id: $id) {
    ...WorkoutPlanWithMetaDataAdminData
  }
}
    ${WorkoutPlanWithMetaDataAdminDataFragmentDoc}`;

/**
 * __useAdminPublicWorkoutPlanByIdQuery__
 *
 * To run a query within a React component, call `useAdminPublicWorkoutPlanByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicWorkoutPlanByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicWorkoutPlanByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdminPublicWorkoutPlanByIdQuery(baseOptions: Apollo.QueryHookOptions<AdminPublicWorkoutPlanByIdQuery, AdminPublicWorkoutPlanByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicWorkoutPlanByIdQuery, AdminPublicWorkoutPlanByIdQueryVariables>(AdminPublicWorkoutPlanByIdDocument, options);
      }
export function useAdminPublicWorkoutPlanByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicWorkoutPlanByIdQuery, AdminPublicWorkoutPlanByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicWorkoutPlanByIdQuery, AdminPublicWorkoutPlanByIdQueryVariables>(AdminPublicWorkoutPlanByIdDocument, options);
        }
export type AdminPublicWorkoutPlanByIdQueryHookResult = ReturnType<typeof useAdminPublicWorkoutPlanByIdQuery>;
export type AdminPublicWorkoutPlanByIdLazyQueryHookResult = ReturnType<typeof useAdminPublicWorkoutPlanByIdLazyQuery>;
export type AdminPublicWorkoutPlanByIdQueryResult = Apollo.QueryResult<AdminPublicWorkoutPlanByIdQuery, AdminPublicWorkoutPlanByIdQueryVariables>;
export const AdminPublicClubCountsDocument = gql`
    query adminPublicClubCounts {
  adminPublicClubCounts {
    __typename
    pending
    valid
    invalid
  }
}
    `;

/**
 * __useAdminPublicClubCountsQuery__
 *
 * To run a query within a React component, call `useAdminPublicClubCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicClubCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicClubCountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminPublicClubCountsQuery(baseOptions?: Apollo.QueryHookOptions<AdminPublicClubCountsQuery, AdminPublicClubCountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicClubCountsQuery, AdminPublicClubCountsQueryVariables>(AdminPublicClubCountsDocument, options);
      }
export function useAdminPublicClubCountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicClubCountsQuery, AdminPublicClubCountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicClubCountsQuery, AdminPublicClubCountsQueryVariables>(AdminPublicClubCountsDocument, options);
        }
export type AdminPublicClubCountsQueryHookResult = ReturnType<typeof useAdminPublicClubCountsQuery>;
export type AdminPublicClubCountsLazyQueryHookResult = ReturnType<typeof useAdminPublicClubCountsLazyQuery>;
export type AdminPublicClubCountsQueryResult = Apollo.QueryResult<AdminPublicClubCountsQuery, AdminPublicClubCountsQueryVariables>;
export const AdminPublicWorkoutPlanCountsDocument = gql`
    query adminPublicWorkoutPlanCounts {
  adminPublicWorkoutPlanCounts {
    __typename
    pending
    valid
    invalid
  }
}
    `;

/**
 * __useAdminPublicWorkoutPlanCountsQuery__
 *
 * To run a query within a React component, call `useAdminPublicWorkoutPlanCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicWorkoutPlanCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicWorkoutPlanCountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminPublicWorkoutPlanCountsQuery(baseOptions?: Apollo.QueryHookOptions<AdminPublicWorkoutPlanCountsQuery, AdminPublicWorkoutPlanCountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicWorkoutPlanCountsQuery, AdminPublicWorkoutPlanCountsQueryVariables>(AdminPublicWorkoutPlanCountsDocument, options);
      }
export function useAdminPublicWorkoutPlanCountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicWorkoutPlanCountsQuery, AdminPublicWorkoutPlanCountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicWorkoutPlanCountsQuery, AdminPublicWorkoutPlanCountsQueryVariables>(AdminPublicWorkoutPlanCountsDocument, options);
        }
export type AdminPublicWorkoutPlanCountsQueryHookResult = ReturnType<typeof useAdminPublicWorkoutPlanCountsQuery>;
export type AdminPublicWorkoutPlanCountsLazyQueryHookResult = ReturnType<typeof useAdminPublicWorkoutPlanCountsLazyQuery>;
export type AdminPublicWorkoutPlanCountsQueryResult = Apollo.QueryResult<AdminPublicWorkoutPlanCountsQuery, AdminPublicWorkoutPlanCountsQueryVariables>;
export const AdminPublicWorkoutCountsDocument = gql`
    query adminPublicWorkoutCounts {
  adminPublicWorkoutCounts {
    __typename
    pending
    valid
    invalid
  }
}
    `;

/**
 * __useAdminPublicWorkoutCountsQuery__
 *
 * To run a query within a React component, call `useAdminPublicWorkoutCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicWorkoutCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicWorkoutCountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminPublicWorkoutCountsQuery(baseOptions?: Apollo.QueryHookOptions<AdminPublicWorkoutCountsQuery, AdminPublicWorkoutCountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicWorkoutCountsQuery, AdminPublicWorkoutCountsQueryVariables>(AdminPublicWorkoutCountsDocument, options);
      }
export function useAdminPublicWorkoutCountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicWorkoutCountsQuery, AdminPublicWorkoutCountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicWorkoutCountsQuery, AdminPublicWorkoutCountsQueryVariables>(AdminPublicWorkoutCountsDocument, options);
        }
export type AdminPublicWorkoutCountsQueryHookResult = ReturnType<typeof useAdminPublicWorkoutCountsQuery>;
export type AdminPublicWorkoutCountsLazyQueryHookResult = ReturnType<typeof useAdminPublicWorkoutCountsLazyQuery>;
export type AdminPublicWorkoutCountsQueryResult = Apollo.QueryResult<AdminPublicWorkoutCountsQuery, AdminPublicWorkoutCountsQueryVariables>;
export const UpdateClubMetaDataAdminDocument = gql`
    mutation updateClubMetaDataAdmin($data: UpdateClubMetaDataAdminInput!) {
  updateClubMetaDataAdmin(data: $data) {
    ...ClubWithMetaDataAdminData
  }
}
    ${ClubWithMetaDataAdminDataFragmentDoc}`;
export type UpdateClubMetaDataAdminMutationFn = Apollo.MutationFunction<UpdateClubMetaDataAdminMutation, UpdateClubMetaDataAdminMutationVariables>;

/**
 * __useUpdateClubMetaDataAdminMutation__
 *
 * To run a mutation, you first call `useUpdateClubMetaDataAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClubMetaDataAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClubMetaDataAdminMutation, { data, loading, error }] = useUpdateClubMetaDataAdminMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateClubMetaDataAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClubMetaDataAdminMutation, UpdateClubMetaDataAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClubMetaDataAdminMutation, UpdateClubMetaDataAdminMutationVariables>(UpdateClubMetaDataAdminDocument, options);
      }
export type UpdateClubMetaDataAdminMutationHookResult = ReturnType<typeof useUpdateClubMetaDataAdminMutation>;
export type UpdateClubMetaDataAdminMutationResult = Apollo.MutationResult<UpdateClubMetaDataAdminMutation>;
export type UpdateClubMetaDataAdminMutationOptions = Apollo.BaseMutationOptions<UpdateClubMetaDataAdminMutation, UpdateClubMetaDataAdminMutationVariables>;
export const UpdateWorkoutMetaDataAdminDocument = gql`
    mutation updateWorkoutMetaDataAdmin($data: UpdateWorkoutMetaDataAdminInput!) {
  updateWorkoutMetaDataAdmin(data: $data) {
    ...WorkoutWithMetaDataAdminData
  }
}
    ${WorkoutWithMetaDataAdminDataFragmentDoc}`;
export type UpdateWorkoutMetaDataAdminMutationFn = Apollo.MutationFunction<UpdateWorkoutMetaDataAdminMutation, UpdateWorkoutMetaDataAdminMutationVariables>;

/**
 * __useUpdateWorkoutMetaDataAdminMutation__
 *
 * To run a mutation, you first call `useUpdateWorkoutMetaDataAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkoutMetaDataAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkoutMetaDataAdminMutation, { data, loading, error }] = useUpdateWorkoutMetaDataAdminMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateWorkoutMetaDataAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkoutMetaDataAdminMutation, UpdateWorkoutMetaDataAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkoutMetaDataAdminMutation, UpdateWorkoutMetaDataAdminMutationVariables>(UpdateWorkoutMetaDataAdminDocument, options);
      }
export type UpdateWorkoutMetaDataAdminMutationHookResult = ReturnType<typeof useUpdateWorkoutMetaDataAdminMutation>;
export type UpdateWorkoutMetaDataAdminMutationResult = Apollo.MutationResult<UpdateWorkoutMetaDataAdminMutation>;
export type UpdateWorkoutMetaDataAdminMutationOptions = Apollo.BaseMutationOptions<UpdateWorkoutMetaDataAdminMutation, UpdateWorkoutMetaDataAdminMutationVariables>;
export const UpdateWorkoutPlanMetaDataAdminDocument = gql`
    mutation updateWorkoutPlanMetaDataAdmin($data: UpdateWorkoutPlanMetaDataAdminInput!) {
  updateWorkoutPlanMetaDataAdmin(data: $data) {
    ...WorkoutPlanWithMetaDataAdminData
  }
}
    ${WorkoutPlanWithMetaDataAdminDataFragmentDoc}`;
export type UpdateWorkoutPlanMetaDataAdminMutationFn = Apollo.MutationFunction<UpdateWorkoutPlanMetaDataAdminMutation, UpdateWorkoutPlanMetaDataAdminMutationVariables>;

/**
 * __useUpdateWorkoutPlanMetaDataAdminMutation__
 *
 * To run a mutation, you first call `useUpdateWorkoutPlanMetaDataAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkoutPlanMetaDataAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkoutPlanMetaDataAdminMutation, { data, loading, error }] = useUpdateWorkoutPlanMetaDataAdminMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateWorkoutPlanMetaDataAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkoutPlanMetaDataAdminMutation, UpdateWorkoutPlanMetaDataAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkoutPlanMetaDataAdminMutation, UpdateWorkoutPlanMetaDataAdminMutationVariables>(UpdateWorkoutPlanMetaDataAdminDocument, options);
      }
export type UpdateWorkoutPlanMetaDataAdminMutationHookResult = ReturnType<typeof useUpdateWorkoutPlanMetaDataAdminMutation>;
export type UpdateWorkoutPlanMetaDataAdminMutationResult = Apollo.MutationResult<UpdateWorkoutPlanMetaDataAdminMutation>;
export type UpdateWorkoutPlanMetaDataAdminMutationOptions = Apollo.BaseMutationOptions<UpdateWorkoutPlanMetaDataAdminMutation, UpdateWorkoutPlanMetaDataAdminMutationVariables>;
export const AdminPublicClubSummariesDocument = gql`
    query adminPublicClubSummaries($status: PublicContentValidationStatus!) {
  adminPublicClubSummaries(status: $status) {
    ...PublicClubSummaryAdmin
  }
}
    ${PublicClubSummaryAdminFragmentDoc}`;

/**
 * __useAdminPublicClubSummariesQuery__
 *
 * To run a query within a React component, call `useAdminPublicClubSummariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicClubSummariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicClubSummariesQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useAdminPublicClubSummariesQuery(baseOptions: Apollo.QueryHookOptions<AdminPublicClubSummariesQuery, AdminPublicClubSummariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicClubSummariesQuery, AdminPublicClubSummariesQueryVariables>(AdminPublicClubSummariesDocument, options);
      }
export function useAdminPublicClubSummariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicClubSummariesQuery, AdminPublicClubSummariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicClubSummariesQuery, AdminPublicClubSummariesQueryVariables>(AdminPublicClubSummariesDocument, options);
        }
export type AdminPublicClubSummariesQueryHookResult = ReturnType<typeof useAdminPublicClubSummariesQuery>;
export type AdminPublicClubSummariesLazyQueryHookResult = ReturnType<typeof useAdminPublicClubSummariesLazyQuery>;
export type AdminPublicClubSummariesQueryResult = Apollo.QueryResult<AdminPublicClubSummariesQuery, AdminPublicClubSummariesQueryVariables>;
export const AdminPublicWorkoutPlanSummariesDocument = gql`
    query adminPublicWorkoutPlanSummaries($status: PublicContentValidationStatus!) {
  adminPublicWorkoutPlanSummaries(status: $status) {
    ...PublicWorkoutPlanSummaryAdmin
  }
}
    ${PublicWorkoutPlanSummaryAdminFragmentDoc}`;

/**
 * __useAdminPublicWorkoutPlanSummariesQuery__
 *
 * To run a query within a React component, call `useAdminPublicWorkoutPlanSummariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicWorkoutPlanSummariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicWorkoutPlanSummariesQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useAdminPublicWorkoutPlanSummariesQuery(baseOptions: Apollo.QueryHookOptions<AdminPublicWorkoutPlanSummariesQuery, AdminPublicWorkoutPlanSummariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicWorkoutPlanSummariesQuery, AdminPublicWorkoutPlanSummariesQueryVariables>(AdminPublicWorkoutPlanSummariesDocument, options);
      }
export function useAdminPublicWorkoutPlanSummariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicWorkoutPlanSummariesQuery, AdminPublicWorkoutPlanSummariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicWorkoutPlanSummariesQuery, AdminPublicWorkoutPlanSummariesQueryVariables>(AdminPublicWorkoutPlanSummariesDocument, options);
        }
export type AdminPublicWorkoutPlanSummariesQueryHookResult = ReturnType<typeof useAdminPublicWorkoutPlanSummariesQuery>;
export type AdminPublicWorkoutPlanSummariesLazyQueryHookResult = ReturnType<typeof useAdminPublicWorkoutPlanSummariesLazyQuery>;
export type AdminPublicWorkoutPlanSummariesQueryResult = Apollo.QueryResult<AdminPublicWorkoutPlanSummariesQuery, AdminPublicWorkoutPlanSummariesQueryVariables>;
export const AdminPublicWorkoutSummariesDocument = gql`
    query adminPublicWorkoutSummaries($status: PublicContentValidationStatus!) {
  adminPublicWorkoutSummaries(status: $status) {
    ...PublicWorkoutSummaryAdmin
  }
}
    ${PublicWorkoutSummaryAdminFragmentDoc}`;

/**
 * __useAdminPublicWorkoutSummariesQuery__
 *
 * To run a query within a React component, call `useAdminPublicWorkoutSummariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPublicWorkoutSummariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPublicWorkoutSummariesQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useAdminPublicWorkoutSummariesQuery(baseOptions: Apollo.QueryHookOptions<AdminPublicWorkoutSummariesQuery, AdminPublicWorkoutSummariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminPublicWorkoutSummariesQuery, AdminPublicWorkoutSummariesQueryVariables>(AdminPublicWorkoutSummariesDocument, options);
      }
export function useAdminPublicWorkoutSummariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminPublicWorkoutSummariesQuery, AdminPublicWorkoutSummariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminPublicWorkoutSummariesQuery, AdminPublicWorkoutSummariesQueryVariables>(AdminPublicWorkoutSummariesDocument, options);
        }
export type AdminPublicWorkoutSummariesQueryHookResult = ReturnType<typeof useAdminPublicWorkoutSummariesQuery>;
export type AdminPublicWorkoutSummariesLazyQueryHookResult = ReturnType<typeof useAdminPublicWorkoutSummariesLazyQuery>;
export type AdminPublicWorkoutSummariesQueryResult = Apollo.QueryResult<AdminPublicWorkoutSummariesQuery, AdminPublicWorkoutSummariesQueryVariables>;