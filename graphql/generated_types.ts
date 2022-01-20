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

/** Enums */
export enum BenchmarkType {
  Amrap = 'AMRAP',
  Fastesttime = 'FASTESTTIME',
  Maxload = 'MAXLOAD',
  Unbrokenreps = 'UNBROKENREPS',
  Unbrokentime = 'UNBROKENTIME'
}

export type BodyArea = {
  __typename?: 'BodyArea';
  altNames?: Maybe<Scalars['String']>;
  frontBack: BodyAreaFrontBack;
  id: Scalars['ID'];
  name: Scalars['String'];
  upperLower: BodyAreaUpperLower;
};

export enum BodyAreaFrontBack {
  Back = 'BACK',
  Both = 'BOTH',
  Front = 'FRONT'
}

export type BodyAreaMoveScore = {
  __typename?: 'BodyAreaMoveScore';
  BodyArea: BodyArea;
  Move: Move;
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

export type ClubAnnouncement = {
  __typename?: 'ClubAnnouncement';
  User: UserAvatarData;
  audioUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUri?: Maybe<Scalars['String']>;
  videoThumbUri?: Maybe<Scalars['String']>;
  videoUri?: Maybe<Scalars['String']>;
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

export type CreateBodyTrackingEntryInput = {
  bodyweight?: InputMaybe<Scalars['Float']>;
  bodyweightUnit?: InputMaybe<BodyweightUnit>;
  fatPercent?: InputMaybe<Scalars['Float']>;
  note?: InputMaybe<Scalars['String']>;
  photoUris?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateClubAnnouncementInput = {
  Club: ConnectRelationInput;
  audioUri?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  imageUri?: InputMaybe<Scalars['String']>;
  videoThumbUri?: InputMaybe<Scalars['String']>;
  videoUri?: InputMaybe<Scalars['String']>;
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

export type CreateClubTimelinePostInput = {
  caption?: InputMaybe<Scalars['String']>;
  clubId: Scalars['String'];
  object: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
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

export type CreateGymProfileInput = {
  Equipments?: InputMaybe<Array<ConnectRelationInput>>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateJournalGoalInput = {
  deadline?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateJournalMoodInput = {
  energyScore: Scalars['Int'];
  moodScore: Scalars['Int'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  textNote?: InputMaybe<Scalars['String']>;
};

export type CreateJournalNoteInput = {
  textNote?: InputMaybe<Scalars['String']>;
  voiceNoteUri?: InputMaybe<Scalars['String']>;
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

export type CreateUserBenchmarkEntryInput = {
  UserBenchmark: ConnectRelationInput;
  completedOn: Scalars['DateTime'];
  note?: InputMaybe<Scalars['String']>;
  score: Scalars['Float'];
  videoThumbUri?: InputMaybe<Scalars['String']>;
  videoUri?: InputMaybe<Scalars['String']>;
};

export type CreateUserBenchmarkInput = {
  benchmarkType: BenchmarkType;
  description?: InputMaybe<Scalars['String']>;
  equipmentInfo?: InputMaybe<Scalars['String']>;
  loadUnit?: InputMaybe<LoadUnit>;
  name: Scalars['String'];
};

export type CreateWorkoutInput = {
  contentAccessScope: ContentAccessScope;
  difficultyLevel?: InputMaybe<DifficultyLevel>;
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

export type JournalGoal = {
  __typename?: 'JournalGoal';
  completedDate?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  deadline?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type JournalMood = {
  __typename?: 'JournalMood';
  createdAt: Scalars['DateTime'];
  energyScore: Scalars['Int'];
  id: Scalars['ID'];
  moodScore: Scalars['Int'];
  tags: Array<Scalars['String']>;
  textNote?: Maybe<Scalars['String']>;
};

export type JournalNote = {
  __typename?: 'JournalNote';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  textNote?: Maybe<Scalars['String']>;
  voiceNoteUri?: Maybe<Scalars['String']>;
};

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
  createClubAnnouncement: ClubAnnouncement;
  createClubInviteToken: ClubInviteTokens;
  createClubTimelinePost: TimelinePostFullData;
  createCollection: Collection;
  createCompletedWorkoutPlanDayWorkout: WorkoutPlanEnrolment;
  createEquipment?: Maybe<Equipment>;
  createGymProfile: GymProfile;
  createJournalGoal: JournalGoal;
  createJournalMood: JournalMood;
  createJournalNote: JournalNote;
  createLoggedWorkout: LoggedWorkout;
  createMove: Move;
  createScheduleForPlanEnrolment: WorkoutPlanEnrolment;
  createScheduledWorkout: ScheduledWorkout;
  createSkill: Skill;
  createUserBenchmark: UserBenchmark;
  createUserBenchmarkEntry: UserBenchmarkEntry;
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
  deleteClubAnnouncement: Scalars['ID'];
  deleteClubInviteToken: ClubInviteTokens;
  deleteClubTimelinePost: Scalars['ID'];
  deleteCollectionById: Scalars['ID'];
  deleteCompletedWorkoutPlanDayWorkout: WorkoutPlanEnrolment;
  deleteGymProfileById?: Maybe<Scalars['ID']>;
  deleteJournalGoalById: Scalars['ID'];
  deleteJournalMoodById: Scalars['ID'];
  deleteJournalNoteById: Scalars['ID'];
  deleteLoggedWorkoutById: Scalars['ID'];
  deleteLoggedWorkoutMove: Scalars['ID'];
  deleteScheduledWorkoutById: Scalars['ID'];
  deleteSkillById: Scalars['ID'];
  deleteUserBenchmark: Scalars['ID'];
  deleteUserBenchmarkEntry: Scalars['ID'];
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
  updateClubAnnouncement: ClubAnnouncement;
  updateClubInviteToken: ClubInviteTokens;
  updateClubSummary: ClubSummary;
  updateCollection: Collection;
  updateEquipment?: Maybe<Equipment>;
  updateGymProfile: GymProfile;
  updateJournalGoal: JournalGoal;
  updateJournalMood: JournalMood;
  updateJournalNote: JournalNote;
  updateLoggedWorkout: LoggedWorkout;
  updateLoggedWorkoutMove: LoggedWorkoutMove;
  updateLoggedWorkoutSection: LoggedWorkoutSection;
  updateLoggedWorkoutSet: LoggedWorkoutSet;
  updateMove: Move;
  updateScheduledWorkout: ScheduledWorkout;
  updateSkill: Skill;
  updateUserBenchmark: UserBenchmark;
  updateUserBenchmarkEntry: UserBenchmarkEntry;
  updateUserProfile: UpdateUserProfileResult;
  updateWorkout: Workout;
  updateWorkoutMove: WorkoutMove;
  updateWorkoutMoves: Array<WorkoutMove>;
  updateWorkoutPlan: WorkoutPlan;
  updateWorkoutPlanDay: WorkoutPlanDay;
  updateWorkoutPlanDayWorkout: WorkoutPlanDayWorkout;
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


export type MutationCreateClubAnnouncementArgs = {
  data: CreateClubAnnouncementInput;
};


export type MutationCreateClubInviteTokenArgs = {
  data: CreateClubInviteTokenInput;
};


export type MutationCreateClubTimelinePostArgs = {
  data: CreateClubTimelinePostInput;
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


export type MutationCreateGymProfileArgs = {
  data: CreateGymProfileInput;
};


export type MutationCreateJournalGoalArgs = {
  data: CreateJournalGoalInput;
};


export type MutationCreateJournalMoodArgs = {
  data: CreateJournalMoodInput;
};


export type MutationCreateJournalNoteArgs = {
  data: CreateJournalNoteInput;
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


export type MutationCreateUserBenchmarkArgs = {
  data: CreateUserBenchmarkInput;
};


export type MutationCreateUserBenchmarkEntryArgs = {
  data: CreateUserBenchmarkEntryInput;
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


export type MutationDeleteClubAnnouncementArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteClubInviteTokenArgs = {
  data: DeleteClubInviteTokenInput;
};


export type MutationDeleteClubTimelinePostArgs = {
  activityId: Scalars['ID'];
};


export type MutationDeleteCollectionByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompletedWorkoutPlanDayWorkoutArgs = {
  data: DeleteCompletedWorkoutPlanDayWorkoutInput;
};


export type MutationDeleteGymProfileByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteJournalGoalByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteJournalMoodByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteJournalNoteByIdArgs = {
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


export type MutationDeleteUserBenchmarkArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserBenchmarkEntryArgs = {
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


export type MutationUpdateClubAnnouncementArgs = {
  data: UpdateClubAnnouncementInput;
};


export type MutationUpdateClubInviteTokenArgs = {
  data: UpdateClubInviteTokenInput;
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


export type MutationUpdateGymProfileArgs = {
  data: UpdateGymProfileInput;
};


export type MutationUpdateJournalGoalArgs = {
  data: UpdateJournalGoalInput;
};


export type MutationUpdateJournalMoodArgs = {
  data: UpdateJournalMoodInput;
};


export type MutationUpdateJournalNoteArgs = {
  data: UpdateJournalNoteInput;
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


export type MutationUpdateUserBenchmarkArgs = {
  data: UpdateUserBenchmarkInput;
};


export type MutationUpdateUserBenchmarkEntryArgs = {
  data: UpdateUserBenchmarkEntryInput;
};


export type MutationUpdateUserProfileArgs = {
  data: UpdateUserProfileInput;
};


export type MutationUpdateWorkoutArgs = {
  data: UpdateWorkoutInput;
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

export type Query = {
  __typename?: 'Query';
  bodyAreas: Array<BodyArea>;
  bodyTrackingEntries: Array<BodyTrackingEntry>;
  checkClubInviteToken: CheckClubInviteTokenResult;
  checkUniqueClubName: Scalars['Boolean'];
  checkUniqueDisplayName: Scalars['Boolean'];
  checkUserClubMemberStatus: UserClubMemberStatus;
  clubChatSummary: ClubChatSummary;
  clubInviteTokens: ClubInviteTokens;
  clubMembers: ClubMembers;
  clubMembersFeedPosts: Array<TimelinePostFullData>;
  clubSummaries: Array<ClubSummary>;
  clubSummary: ClubSummary;
  clubWorkoutPlans: ClubWorkoutPlans;
  clubWorkouts: ClubWorkouts;
  equipments: Array<Equipment>;
  gymProfiles: Array<GymProfile>;
  journalGoals: Array<JournalGoal>;
  journalMoods: Array<JournalMood>;
  journalNotes: Array<JournalNote>;
  lifetimeLogStatsSummary: LifetimeLogStatsSummary;
  logCountByWorkout: Scalars['Int'];
  loggedWorkoutById: LoggedWorkout;
  moveTypes: Array<MoveType>;
  publicClubs: Array<ClubSummary>;
  publicWorkoutPlans: Array<WorkoutPlanSummary>;
  publicWorkouts: Array<WorkoutSummary>;
  standardMoves: Array<Move>;
  textSearchUserNames?: Maybe<Array<TextSearchResult>>;
  textSearchUserProfiles?: Maybe<Array<UserProfileSummary>>;
  textSearchWorkoutNames?: Maybe<Array<TextSearchResult>>;
  textSearchWorkoutPlanNames?: Maybe<Array<TextSearchResult>>;
  textSearchWorkoutPlans?: Maybe<Array<WorkoutPlanSummary>>;
  textSearchWorkouts?: Maybe<Array<WorkoutSummary>>;
  timelinePostsData: Array<TimelinePostObjectData>;
  userArchivedCustomMoves: Array<Move>;
  userArchivedWorkoutPlans: Array<WorkoutPlan>;
  userArchivedWorkouts: Array<Workout>;
  userAvatarById: UserAvatarData;
  userAvatars: Array<UserAvatarData>;
  userBenchmark: UserBenchmark;
  userBenchmarks: Array<UserBenchmark>;
  userClubs: Array<ClubSummary>;
  userCollectionById: Collection;
  userCollections: Array<Collection>;
  userCustomMoves: Array<Move>;
  userLoggedWorkouts: Array<LoggedWorkout>;
  userProfile: UserProfile;
  userProfiles: Array<UserProfileSummary>;
  userPublicWorkoutPlans: Array<WorkoutPlanSummary>;
  userPublicWorkouts: Array<WorkoutSummary>;
  userScheduledWorkouts: Array<ScheduledWorkout>;
  userWorkoutPlans: Array<WorkoutPlanSummary>;
  userWorkoutTags: Array<WorkoutTag>;
  userWorkouts: Array<WorkoutSummary>;
  validateToken: Scalars['Boolean'];
  workoutById: Workout;
  workoutGoals: Array<WorkoutGoal>;
  workoutPlanById: WorkoutPlan;
  workoutPlanEnrolmentById: WorkoutPlanEnrolmentWithPlan;
  workoutPlanEnrolments: Array<WorkoutPlanEnrolmentSummary>;
  workoutSectionTypes: Array<WorkoutSectionType>;
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


export type QueryTimelinePostsDataArgs = {
  postDataRequests: Array<TimelinePostDataRequestInput>;
};


export type QueryUserAvatarByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUserAvatarsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryUserBenchmarkArgs = {
  id: Scalars['ID'];
};


export type QueryUserCollectionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUserLoggedWorkoutsArgs = {
  take?: InputMaybe<Scalars['Int']>;
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
};

export type SortPositionUpdated = {
  __typename?: 'SortPositionUpdated';
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
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

export type TimelinePostDataRequestInput = {
  activityId: Scalars['String'];
  objectId: Scalars['ID'];
  objectType: TimelinePostType;
  posterId: Scalars['ID'];
};

export type TimelinePostFullData = {
  __typename?: 'TimelinePostFullData';
  activityId: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  creator: TimelinePostObjectDataUser;
  object: TimelinePostObjectDataObject;
  postedAt: Scalars['DateTime'];
  poster: TimelinePostObjectDataUser;
  tags: Array<Scalars['String']>;
};

export type TimelinePostObjectData = {
  __typename?: 'TimelinePostObjectData';
  activityId: Scalars['String'];
  creator: TimelinePostObjectDataUser;
  object: TimelinePostObjectDataObject;
  poster: TimelinePostObjectDataUser;
};

export type TimelinePostObjectDataObject = {
  __typename?: 'TimelinePostObjectDataObject';
  audioUri?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUri?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: TimelinePostType;
  videoThumbUri?: Maybe<Scalars['String']>;
  videoUri?: Maybe<Scalars['String']>;
};

export type TimelinePostObjectDataUser = {
  __typename?: 'TimelinePostObjectDataUser';
  avatarUri?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  id: Scalars['ID'];
};

export enum TimelinePostType {
  Announcement = 'ANNOUNCEMENT',
  Workout = 'WORKOUT',
  Workoutplan = 'WORKOUTPLAN'
}

export type UpdateBodyTrackingEntryInput = {
  bodyweight?: InputMaybe<Scalars['Float']>;
  bodyweightUnit?: InputMaybe<BodyweightUnit>;
  fatPercent?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
  photoUris?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateClubAnnouncementInput = {
  audioUri?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUri?: InputMaybe<Scalars['String']>;
  videoThumbUri?: InputMaybe<Scalars['String']>;
  videoUri?: InputMaybe<Scalars['String']>;
};

export type UpdateClubInviteTokenInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  clubId: Scalars['ID'];
  id: Scalars['ID'];
  inviteLimit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
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

export type UpdateGymProfileInput = {
  Equipments?: InputMaybe<Array<ConnectRelationInput>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateJournalGoalInput = {
  completedDate?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateJournalMoodInput = {
  energyScore?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  moodScore?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  textNote?: InputMaybe<Scalars['String']>;
};

export type UpdateJournalNoteInput = {
  id: Scalars['ID'];
  textNote?: InputMaybe<Scalars['String']>;
  voiceNoteUri?: InputMaybe<Scalars['String']>;
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

export type UpdateUserBenchmarkEntryInput = {
  completedOn?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  videoThumbUri?: InputMaybe<Scalars['String']>;
  videoUri?: InputMaybe<Scalars['String']>;
};

export type UpdateUserBenchmarkInput = {
  benchmarkType: BenchmarkType;
  description?: InputMaybe<Scalars['String']>;
  equipmentInfo?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  loadUnit?: InputMaybe<LoadUnit>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserProfileInput = {
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
  youtubeHandle?: InputMaybe<Scalars['String']>;
};

export type UpdateUserProfileResult = {
  __typename?: 'UpdateUserProfileResult';
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
  youtubeHandle?: Maybe<Scalars['String']>;
};

export type UpdateWorkoutInput = {
  WorkoutGoals?: InputMaybe<Array<ConnectRelationInput>>;
  WorkoutTags?: InputMaybe<Array<ConnectRelationInput>>;
  contentAccessScope?: InputMaybe<ContentAccessScope>;
  coverImageUri?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  difficultyLevel?: InputMaybe<DifficultyLevel>;
  id: Scalars['ID'];
  introAudioUri?: InputMaybe<Scalars['String']>;
  introVideoThumbUri?: InputMaybe<Scalars['String']>;
  introVideoUri?: InputMaybe<Scalars['String']>;
  lengthMinutes?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
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

export type UserBenchmark = {
  __typename?: 'UserBenchmark';
  UserBenchmarkEntries: Array<UserBenchmarkEntry>;
  benchmarkType: BenchmarkType;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  equipmentInfo?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastEntryAt: Scalars['DateTime'];
  loadUnit: LoadUnit;
  name: Scalars['String'];
};

export type UserBenchmarkEntry = {
  __typename?: 'UserBenchmarkEntry';
  completedOn: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  score: Scalars['Float'];
  videoThumbUri?: Maybe<Scalars['String']>;
  videoUri?: Maybe<Scalars['String']>;
};

export type UserBenchmarkSummary = {
  __typename?: 'UserBenchmarkSummary';
  benchmarkType: BenchmarkType;
  equipmentInfo?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastEntryAt: Scalars['DateTime'];
  loadUnit: LoadUnit;
  name: Scalars['String'];
};

export type UserBenchmarkWithBestEntry = {
  __typename?: 'UserBenchmarkWithBestEntry';
  BestEntry?: Maybe<UserBenchmarkEntry>;
  UserBenchmarkSummary: UserBenchmarkSummary;
};

export enum UserClubMemberStatus {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  None = 'NONE',
  Owner = 'OWNER'
}

export type UserProfile = {
  __typename?: 'UserProfile';
  BenchmarksWithBestEntries: Array<UserBenchmarkWithBestEntry>;
  Clubs: Array<ClubSummary>;
  LifetimeLogStatsSummary?: Maybe<LifetimeLogStatsSummary>;
  Skills: Array<Skill>;
  avatarUri?: Maybe<Scalars['String']>;
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
  workoutsCount: Scalars['Int'];
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
  LoggedWorkoutSections: Array<LoggedWorkoutSection>;
  WorkoutSections: Array<WorkoutSection>;
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
  coverImageUri?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  difficultyLevel?: Maybe<DifficultyLevel>;
  equipments: Array<Scalars['String']>;
  hasClassAudio: Scalars['Boolean'];
  hasClassVideo: Scalars['Boolean'];
  id: Scalars['ID'];
  lengthMinutes?: Maybe<Scalars['Int']>;
  loggedSessionsCount: Scalars['Int'];
  name: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type WorkoutTag = {
  __typename?: 'WorkoutTag';
  id: Scalars['ID'];
  tag: Scalars['String'];
};

export type EquipmentFragment = { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean };

export type BodyAreaFragment = { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower };

export type ClubSummaryFragment = { __typename: 'ClubSummary', id: string, createdAt: any, name: string, description?: string | null | undefined, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, location?: string | null | undefined, memberCount: number, workoutCount: number, planCount: number };

export type MoveTypeFragment = { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined };

export type WorkoutSummaryFragment = { __typename: 'WorkoutSummary', id: string, createdAt: any, archived: boolean, name: string, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, description?: string | null | undefined, difficultyLevel?: DifficultyLevel | null | undefined, loggedSessionsCount: number, hasClassVideo: boolean, hasClassAudio: boolean, equipments: Array<string>, tags: Array<string>, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string } };

export type WorkoutPlanSummaryFragment = { __typename: 'WorkoutPlanSummary', id: string, createdAt: any, archived: boolean, name: string, description?: string | null | undefined, coverImageUri?: string | null | undefined, lengthWeeks: number, daysPerWeek: number, workoutsCount: number, enrolmentsCount: number, tags: Array<string>, reviewScore?: number | null | undefined, reviewCount: number, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, goals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }> };

export type WorkoutGoalFragment = { __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string };

export type UserAvatarDataFragment = { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string };

export type BodyAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type BodyAreasQuery = { __typename?: 'Query', bodyAreas: Array<{ __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower }> };

export type CreateEquipmentMutationVariables = Exact<{
  data: CreateEquipmentInput;
}>;


export type CreateEquipmentMutation = { __typename?: 'Mutation', createEquipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined };

export type EquipmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type EquipmentsQuery = { __typename?: 'Query', equipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }> };

export type UpdateEquipmentMutationVariables = Exact<{
  data: UpdateEquipmentInput;
}>;


export type UpdateEquipmentMutation = { __typename?: 'Mutation', updateEquipment?: { __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean } | null | undefined };

export type CreateMoveMutationVariables = Exact<{
  data: CreateMoveInput;
}>;


export type CreateMoveMutation = { __typename?: 'Mutation', createMove: { __typename?: 'Move', id: string, name: string, description?: string | null | undefined, searchTerms?: string | null | undefined, validRepTypes: Array<WorkoutMoveRepType>, demoVideoUri?: string | null | undefined, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }> } };

export type StandardMovesQueryVariables = Exact<{ [key: string]: never; }>;


export type StandardMovesQuery = { __typename?: 'Query', standardMoves: Array<{ __typename?: 'Move', id: string, name: string, description?: string | null | undefined, searchTerms?: string | null | undefined, validRepTypes: Array<WorkoutMoveRepType>, demoVideoUri?: string | null | undefined, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }> }> };

export type UpdateMoveMutationVariables = Exact<{
  data: UpdateMoveInput;
}>;


export type UpdateMoveMutation = { __typename?: 'Mutation', updateMove: { __typename?: 'Move', id: string, name: string, description?: string | null | undefined, searchTerms?: string | null | undefined, validRepTypes: Array<WorkoutMoveRepType>, demoVideoUri?: string | null | undefined, MoveType: { __typename: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }, RequiredEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, SelectableEquipments: Array<{ __typename: 'Equipment', id: string, name: string, altNames?: string | null | undefined, loadAdjustable: boolean }>, BodyAreaMoveScores: Array<{ __typename?: 'BodyAreaMoveScore', score: number, BodyArea: { __typename: 'BodyArea', id: string, name: string, altNames?: string | null | undefined, frontBack: BodyAreaFrontBack, upperLower: BodyAreaUpperLower } }> } };

export type MoveTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type MoveTypesQuery = { __typename?: 'Query', moveTypes: Array<{ __typename?: 'MoveType', id: string, name: string, description?: string | null | undefined, imageUri?: string | null | undefined }> };

export type WorkoutGoalsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkoutGoalsQuery = { __typename?: 'Query', workoutGoals: Array<{ __typename?: 'WorkoutGoal', id: string, name: string, description: string }> };

export type WorkoutSectionTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkoutSectionTypesQuery = { __typename?: 'Query', workoutSectionTypes: Array<{ __typename?: 'WorkoutSectionType', id: string, name: string, subtitle: string, description: string, validRepTypes: Array<WorkoutMoveRepType> }> };

export type PublicClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicClubsQuery = { __typename?: 'Query', publicClubs: Array<{ __typename: 'ClubSummary', id: string, createdAt: any, name: string, description?: string | null | undefined, coverImageUri?: string | null | undefined, introVideoUri?: string | null | undefined, introVideoThumbUri?: string | null | undefined, introAudioUri?: string | null | undefined, contentAccessScope: ContentAccessScope, location?: string | null | undefined, memberCount: number, workoutCount: number, planCount: number, Owner: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, Admins: Array<{ __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }> }> };

export type PublicWorkoutPlansQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<WorkoutPlanFiltersInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type PublicWorkoutPlansQuery = { __typename?: 'Query', publicWorkoutPlans: Array<{ __typename: 'WorkoutPlanSummary', id: string, createdAt: any, archived: boolean, name: string, description?: string | null | undefined, coverImageUri?: string | null | undefined, lengthWeeks: number, daysPerWeek: number, workoutsCount: number, enrolmentsCount: number, tags: Array<string>, reviewScore?: number | null | undefined, reviewCount: number, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string }, goals: Array<{ __typename: 'WorkoutGoal', id: string, name: string, description: string, hexColor: string }> }> };

export type PublicWorkoutsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']>;
  filters?: InputMaybe<WorkoutFiltersInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type PublicWorkoutsQuery = { __typename?: 'Query', publicWorkouts: Array<{ __typename: 'WorkoutSummary', id: string, createdAt: any, archived: boolean, name: string, lengthMinutes?: number | null | undefined, coverImageUri?: string | null | undefined, description?: string | null | undefined, difficultyLevel?: DifficultyLevel | null | undefined, loggedSessionsCount: number, hasClassVideo: boolean, hasClassAudio: boolean, equipments: Array<string>, tags: Array<string>, User: { __typename: 'UserAvatarData', id: string, avatarUri?: string | null | undefined, displayName: string } }> };

export const EquipmentFragmentDoc = gql`
    fragment Equipment on Equipment {
  __typename
  id
  name
  altNames
  loadAdjustable
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
export const MoveTypeFragmentDoc = gql`
    fragment MoveType on MoveType {
  __typename
  id
  name
  description
  imageUri
}
    `;
export const UserAvatarDataFragmentDoc = gql`
    fragment UserAvatarData on UserAvatarData {
  __typename
  id
  avatarUri
  displayName
}
    `;
export const WorkoutSummaryFragmentDoc = gql`
    fragment WorkoutSummary on WorkoutSummary {
  __typename
  id
  createdAt
  archived
  name
  User {
    ...UserAvatarData
  }
  lengthMinutes
  coverImageUri
  description
  difficultyLevel
  loggedSessionsCount
  hasClassVideo
  hasClassAudio
  equipments
  tags
}
    ${UserAvatarDataFragmentDoc}`;
export const WorkoutGoalFragmentDoc = gql`
    fragment WorkoutGoal on WorkoutGoal {
  __typename
  id
  name
  description
  hexColor
}
    `;
export const WorkoutPlanSummaryFragmentDoc = gql`
    fragment WorkoutPlanSummary on WorkoutPlanSummary {
  __typename
  id
  createdAt
  archived
  name
  description
  coverImageUri
  lengthWeeks
  daysPerWeek
  workoutsCount
  User {
    ...UserAvatarData
  }
  enrolmentsCount
  goals {
    ...WorkoutGoal
  }
  tags
  reviewScore
  reviewCount
}
    ${UserAvatarDataFragmentDoc}
${WorkoutGoalFragmentDoc}`;
export const BodyAreasDocument = gql`
    query bodyAreas {
  bodyAreas {
    ...BodyArea
  }
}
    ${BodyAreaFragmentDoc}`;

/**
 * __useBodyAreasQuery__
 *
 * To run a query within a React component, call `useBodyAreasQuery` and pass it any options that fit your needs.
 * When your component renders, `useBodyAreasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBodyAreasQuery({
 *   variables: {
 *   },
 * });
 */
export function useBodyAreasQuery(baseOptions?: Apollo.QueryHookOptions<BodyAreasQuery, BodyAreasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BodyAreasQuery, BodyAreasQueryVariables>(BodyAreasDocument, options);
      }
export function useBodyAreasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BodyAreasQuery, BodyAreasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BodyAreasQuery, BodyAreasQueryVariables>(BodyAreasDocument, options);
        }
export type BodyAreasQueryHookResult = ReturnType<typeof useBodyAreasQuery>;
export type BodyAreasLazyQueryHookResult = ReturnType<typeof useBodyAreasLazyQuery>;
export type BodyAreasQueryResult = Apollo.QueryResult<BodyAreasQuery, BodyAreasQueryVariables>;
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
export const EquipmentsDocument = gql`
    query equipments {
  equipments {
    ...Equipment
  }
}
    ${EquipmentFragmentDoc}`;

/**
 * __useEquipmentsQuery__
 *
 * To run a query within a React component, call `useEquipmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEquipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEquipmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEquipmentsQuery(baseOptions?: Apollo.QueryHookOptions<EquipmentsQuery, EquipmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EquipmentsQuery, EquipmentsQueryVariables>(EquipmentsDocument, options);
      }
export function useEquipmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EquipmentsQuery, EquipmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EquipmentsQuery, EquipmentsQueryVariables>(EquipmentsDocument, options);
        }
export type EquipmentsQueryHookResult = ReturnType<typeof useEquipmentsQuery>;
export type EquipmentsLazyQueryHookResult = ReturnType<typeof useEquipmentsLazyQuery>;
export type EquipmentsQueryResult = Apollo.QueryResult<EquipmentsQuery, EquipmentsQueryVariables>;
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
export const CreateMoveDocument = gql`
    mutation createMove($data: CreateMoveInput!) {
  createMove(data: $data) {
    id
    name
    description
    searchTerms
    MoveType {
      ...MoveType
    }
    validRepTypes
    demoVideoUri
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
export const StandardMovesDocument = gql`
    query standardMoves {
  standardMoves {
    id
    name
    description
    searchTerms
    MoveType {
      ...MoveType
    }
    validRepTypes
    demoVideoUri
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
    ${MoveTypeFragmentDoc}
${EquipmentFragmentDoc}
${BodyAreaFragmentDoc}`;

/**
 * __useStandardMovesQuery__
 *
 * To run a query within a React component, call `useStandardMovesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStandardMovesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStandardMovesQuery({
 *   variables: {
 *   },
 * });
 */
export function useStandardMovesQuery(baseOptions?: Apollo.QueryHookOptions<StandardMovesQuery, StandardMovesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StandardMovesQuery, StandardMovesQueryVariables>(StandardMovesDocument, options);
      }
export function useStandardMovesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StandardMovesQuery, StandardMovesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StandardMovesQuery, StandardMovesQueryVariables>(StandardMovesDocument, options);
        }
export type StandardMovesQueryHookResult = ReturnType<typeof useStandardMovesQuery>;
export type StandardMovesLazyQueryHookResult = ReturnType<typeof useStandardMovesLazyQuery>;
export type StandardMovesQueryResult = Apollo.QueryResult<StandardMovesQuery, StandardMovesQueryVariables>;
export const UpdateMoveDocument = gql`
    mutation updateMove($data: UpdateMoveInput!) {
  updateMove(data: $data) {
    id
    name
    description
    searchTerms
    MoveType {
      ...MoveType
    }
    validRepTypes
    demoVideoUri
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
export const MoveTypesDocument = gql`
    query moveTypes {
  moveTypes {
    id
    name
    description
    imageUri
  }
}
    `;

/**
 * __useMoveTypesQuery__
 *
 * To run a query within a React component, call `useMoveTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoveTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoveTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoveTypesQuery(baseOptions?: Apollo.QueryHookOptions<MoveTypesQuery, MoveTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoveTypesQuery, MoveTypesQueryVariables>(MoveTypesDocument, options);
      }
export function useMoveTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoveTypesQuery, MoveTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoveTypesQuery, MoveTypesQueryVariables>(MoveTypesDocument, options);
        }
export type MoveTypesQueryHookResult = ReturnType<typeof useMoveTypesQuery>;
export type MoveTypesLazyQueryHookResult = ReturnType<typeof useMoveTypesLazyQuery>;
export type MoveTypesQueryResult = Apollo.QueryResult<MoveTypesQuery, MoveTypesQueryVariables>;
export const WorkoutGoalsDocument = gql`
    query workoutGoals {
  workoutGoals {
    id
    name
    description
  }
}
    `;

/**
 * __useWorkoutGoalsQuery__
 *
 * To run a query within a React component, call `useWorkoutGoalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkoutGoalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkoutGoalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkoutGoalsQuery(baseOptions?: Apollo.QueryHookOptions<WorkoutGoalsQuery, WorkoutGoalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkoutGoalsQuery, WorkoutGoalsQueryVariables>(WorkoutGoalsDocument, options);
      }
export function useWorkoutGoalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkoutGoalsQuery, WorkoutGoalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkoutGoalsQuery, WorkoutGoalsQueryVariables>(WorkoutGoalsDocument, options);
        }
export type WorkoutGoalsQueryHookResult = ReturnType<typeof useWorkoutGoalsQuery>;
export type WorkoutGoalsLazyQueryHookResult = ReturnType<typeof useWorkoutGoalsLazyQuery>;
export type WorkoutGoalsQueryResult = Apollo.QueryResult<WorkoutGoalsQuery, WorkoutGoalsQueryVariables>;
export const WorkoutSectionTypesDocument = gql`
    query workoutSectionTypes {
  workoutSectionTypes {
    id
    name
    subtitle
    description
    validRepTypes
  }
}
    `;

/**
 * __useWorkoutSectionTypesQuery__
 *
 * To run a query within a React component, call `useWorkoutSectionTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkoutSectionTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkoutSectionTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkoutSectionTypesQuery(baseOptions?: Apollo.QueryHookOptions<WorkoutSectionTypesQuery, WorkoutSectionTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkoutSectionTypesQuery, WorkoutSectionTypesQueryVariables>(WorkoutSectionTypesDocument, options);
      }
export function useWorkoutSectionTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkoutSectionTypesQuery, WorkoutSectionTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkoutSectionTypesQuery, WorkoutSectionTypesQueryVariables>(WorkoutSectionTypesDocument, options);
        }
export type WorkoutSectionTypesQueryHookResult = ReturnType<typeof useWorkoutSectionTypesQuery>;
export type WorkoutSectionTypesLazyQueryHookResult = ReturnType<typeof useWorkoutSectionTypesLazyQuery>;
export type WorkoutSectionTypesQueryResult = Apollo.QueryResult<WorkoutSectionTypesQuery, WorkoutSectionTypesQueryVariables>;
export const PublicClubsDocument = gql`
    query publicClubs {
  publicClubs {
    ...ClubSummary
    Owner {
      ...UserAvatarData
    }
    Admins {
      ...UserAvatarData
    }
  }
}
    ${ClubSummaryFragmentDoc}
${UserAvatarDataFragmentDoc}`;

/**
 * __usePublicClubsQuery__
 *
 * To run a query within a React component, call `usePublicClubsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicClubsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicClubsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublicClubsQuery(baseOptions?: Apollo.QueryHookOptions<PublicClubsQuery, PublicClubsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicClubsQuery, PublicClubsQueryVariables>(PublicClubsDocument, options);
      }
export function usePublicClubsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicClubsQuery, PublicClubsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicClubsQuery, PublicClubsQueryVariables>(PublicClubsDocument, options);
        }
export type PublicClubsQueryHookResult = ReturnType<typeof usePublicClubsQuery>;
export type PublicClubsLazyQueryHookResult = ReturnType<typeof usePublicClubsLazyQuery>;
export type PublicClubsQueryResult = Apollo.QueryResult<PublicClubsQuery, PublicClubsQueryVariables>;
export const PublicWorkoutPlansDocument = gql`
    query publicWorkoutPlans($cursor: ID, $filters: WorkoutPlanFiltersInput, $take: Int) {
  publicWorkoutPlans(cursor: $cursor, filters: $filters, take: $take) {
    ...WorkoutPlanSummary
  }
}
    ${WorkoutPlanSummaryFragmentDoc}`;

/**
 * __usePublicWorkoutPlansQuery__
 *
 * To run a query within a React component, call `usePublicWorkoutPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicWorkoutPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicWorkoutPlansQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      filters: // value for 'filters'
 *      take: // value for 'take'
 *   },
 * });
 */
export function usePublicWorkoutPlansQuery(baseOptions?: Apollo.QueryHookOptions<PublicWorkoutPlansQuery, PublicWorkoutPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicWorkoutPlansQuery, PublicWorkoutPlansQueryVariables>(PublicWorkoutPlansDocument, options);
      }
export function usePublicWorkoutPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicWorkoutPlansQuery, PublicWorkoutPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicWorkoutPlansQuery, PublicWorkoutPlansQueryVariables>(PublicWorkoutPlansDocument, options);
        }
export type PublicWorkoutPlansQueryHookResult = ReturnType<typeof usePublicWorkoutPlansQuery>;
export type PublicWorkoutPlansLazyQueryHookResult = ReturnType<typeof usePublicWorkoutPlansLazyQuery>;
export type PublicWorkoutPlansQueryResult = Apollo.QueryResult<PublicWorkoutPlansQuery, PublicWorkoutPlansQueryVariables>;
export const PublicWorkoutsDocument = gql`
    query publicWorkouts($cursor: ID, $filters: WorkoutFiltersInput, $take: Int) {
  publicWorkouts(cursor: $cursor, filters: $filters, take: $take) {
    ...WorkoutSummary
  }
}
    ${WorkoutSummaryFragmentDoc}`;

/**
 * __usePublicWorkoutsQuery__
 *
 * To run a query within a React component, call `usePublicWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicWorkoutsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      filters: // value for 'filters'
 *      take: // value for 'take'
 *   },
 * });
 */
export function usePublicWorkoutsQuery(baseOptions?: Apollo.QueryHookOptions<PublicWorkoutsQuery, PublicWorkoutsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicWorkoutsQuery, PublicWorkoutsQueryVariables>(PublicWorkoutsDocument, options);
      }
export function usePublicWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicWorkoutsQuery, PublicWorkoutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicWorkoutsQuery, PublicWorkoutsQueryVariables>(PublicWorkoutsDocument, options);
        }
export type PublicWorkoutsQueryHookResult = ReturnType<typeof usePublicWorkoutsQuery>;
export type PublicWorkoutsLazyQueryHookResult = ReturnType<typeof usePublicWorkoutsLazyQuery>;
export type PublicWorkoutsQueryResult = Apollo.QueryResult<PublicWorkoutsQuery, PublicWorkoutsQueryVariables>;