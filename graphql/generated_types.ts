import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BodyArea = {
  __typename?: 'BodyArea';
  id: Scalars['ID'];
  name: Scalars['String'];
  altNames?: Maybe<Scalars['String']>;
  frontBack: BodyAreaFrontBack;
  upperLower: BodyAreaUpperLower;
};

/** Enums */
export enum BodyAreaFrontBack {
  Back = 'BACK',
  Front = 'FRONT',
  Both = 'BOTH'
}

export type BodyAreaMoveScore = {
  __typename?: 'BodyAreaMoveScore';
  Move: Move;
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

export type ConnectRelationInput = {
  id: Scalars['ID'];
};

export enum ContentAccessScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Group = 'GROUP',
  Official = 'OFFICIAL'
}

export type CreateEquipmentInput = {
  name: Scalars['String'];
  altNames?: Maybe<Scalars['String']>;
  loadAdjustable: Scalars['Boolean'];
};

export type CreateGymProfileInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  Equipments: Array<Scalars['ID']>;
};

export type CreateLoggedWorkoutInput = {
  completedOn: Scalars['DateTime'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  imageUri?: Maybe<Scalars['String']>;
  LoggedWorkoutSections: Array<CreateLoggedWorkoutSectionInLoggedWorkoutInput>;
  Workout: Scalars['ID'];
  ScheduledWorkout?: Maybe<Scalars['ID']>;
  GymProfile?: Maybe<Scalars['ID']>;
  WorkoutProgramWorkout?: Maybe<Scalars['ID']>;
  WorkoutProgramEnrolment?: Maybe<Scalars['ID']>;
};

export type CreateLoggedWorkoutMoveInLoggedSetInput = {
  sortPosition: Scalars['Int'];
  timeTakenMs?: Maybe<Scalars['Int']>;
  repType: WorkoutMoveRepType;
  reps: Scalars['Float'];
  distanceUnit?: Maybe<DistanceUnit>;
  loadAmount?: Maybe<Scalars['Float']>;
  loadUnit?: Maybe<LoadUnit>;
  Move: Scalars['ID'];
  Equipment?: Maybe<Scalars['ID']>;
};

export type CreateLoggedWorkoutMoveInput = {
  sortPosition: Scalars['Int'];
  timeTakenMs?: Maybe<Scalars['Int']>;
  repType: WorkoutMoveRepType;
  reps: Scalars['Float'];
  distanceUnit?: Maybe<DistanceUnit>;
  loadAmount?: Maybe<Scalars['Float']>;
  loadUnit?: Maybe<LoadUnit>;
  Move: Scalars['ID'];
  Equipment?: Maybe<Scalars['ID']>;
  LoggedWorkoutSet: Scalars['ID'];
};

export type CreateLoggedWorkoutSectionInLoggedWorkoutInput = {
  sectionIndex: Scalars['Int'];
  roundIndex: Scalars['Int'];
  timeTakenMs: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
  WorkoutSectionType: Scalars['ID'];
  LoggedWorkoutSets: Array<CreateLoggedWorkoutSetInLoggedSectionInput>;
};

export type CreateLoggedWorkoutSectionInput = {
  sectionIndex: Scalars['Int'];
  roundIndex: Scalars['Int'];
  timeTakenMs: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
  WorkoutSectionType: Scalars['ID'];
  LoggedWorkout: Scalars['ID'];
};

export type CreateLoggedWorkoutSetInLoggedSectionInput = {
  setIndex: Scalars['Int'];
  roundIndex: Scalars['Int'];
  timeTakenMs?: Maybe<Scalars['Int']>;
  LoggedWorkoutMoves: Array<CreateLoggedWorkoutMoveInLoggedSetInput>;
};

export type CreateLoggedWorkoutSetInput = {
  setIndex: Scalars['Int'];
  roundIndex: Scalars['Int'];
  timeTakenMs?: Maybe<Scalars['Int']>;
  LoggedWorkoutSection: Scalars['ID'];
};

export type CreateMoveInput = {
  name: Scalars['String'];
  searchTerms?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  demoVideoUri?: Maybe<Scalars['String']>;
  demoVideoThumbUri?: Maybe<Scalars['String']>;
  scope?: Maybe<MoveScope>;
  MoveType: ConnectRelationInput;
  validRepTypes: Array<WorkoutMoveRepType>;
  RequiredEquipments?: Maybe<Array<ConnectRelationInput>>;
  SelectableEquipments?: Maybe<Array<ConnectRelationInput>>;
  BodyAreaMoveScores?: Maybe<Array<BodyAreaMoveScoreInput>>;
};

export type CreateProgressJournalEntryInput = {
  note?: Maybe<Scalars['String']>;
  voiceNoteUri?: Maybe<Scalars['String']>;
  bodyweight?: Maybe<Scalars['Float']>;
  moodScore?: Maybe<Scalars['Float']>;
  energyScore?: Maybe<Scalars['Float']>;
  stressScore?: Maybe<Scalars['Float']>;
  motivationScore?: Maybe<Scalars['Float']>;
  progressPhotoUris?: Maybe<Array<Scalars['String']>>;
  ProgressJournal: Scalars['ID'];
};

export type CreateProgressJournalGoalInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['DateTime']>;
  ProgressJournal: Scalars['ID'];
  ProgressJournalGoalTags?: Maybe<Array<Scalars['ID']>>;
};

export type CreateProgressJournalGoalTagInput = {
  tag: Scalars['String'];
  hexColor: Scalars['String'];
};

export type CreateProgressJournalInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CreateScheduledWorkoutInput = {
  scheduledAt: Scalars['DateTime'];
  note?: Maybe<Scalars['String']>;
  Workout: Scalars['ID'];
  GymProfile?: Maybe<Scalars['ID']>;
};

export type CreateWorkoutInput = {
  name: Scalars['String'];
  difficultyLevel: DifficultyLevel;
  contentAccessScope: ContentAccessScope;
};

export type CreateWorkoutMoveInput = {
  sortPosition: Scalars['Int'];
  reps: Scalars['Float'];
  repType: WorkoutMoveRepType;
  distanceUnit?: Maybe<DistanceUnit>;
  loadAmount: Scalars['Float'];
  loadUnit?: Maybe<LoadUnit>;
  timeUnit?: Maybe<TimeUnit>;
  Move: ConnectRelationInput;
  Equipment?: Maybe<ConnectRelationInput>;
  WorkoutSet: ConnectRelationInput;
};

export type CreateWorkoutProgramInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  coverImageUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  contentAccessScope: ContentAccessScope;
  WorkoutGoals?: Maybe<Array<Scalars['ID']>>;
  WorkoutProgramWorkouts?: Maybe<Array<CreateWorkoutProgramWorkoutInput>>;
};

export type CreateWorkoutProgramReviewInput = {
  score: Scalars['Float'];
  comment?: Maybe<Scalars['String']>;
  WorkoutProgram: Scalars['ID'];
};

export type CreateWorkoutProgramWorkoutInput = {
  dayNumber: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
  Workout: Scalars['ID'];
  WorkoutProgram: Scalars['ID'];
};

export type CreateWorkoutSectionInput = {
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  rounds?: Maybe<Scalars['Int']>;
  timecap?: Maybe<Scalars['Int']>;
  sortPosition: Scalars['Int'];
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  classVideoUri?: Maybe<Scalars['String']>;
  classVideoThumbUri?: Maybe<Scalars['String']>;
  classAudioUri?: Maybe<Scalars['String']>;
  outroVideoUri?: Maybe<Scalars['String']>;
  outroVideoThumbUri?: Maybe<Scalars['String']>;
  outroAudioUri?: Maybe<Scalars['String']>;
  WorkoutSectionType: ConnectRelationInput;
  Workout: ConnectRelationInput;
};

export type CreateWorkoutSetGeneratorInput = {
  type: WorkoutSetGeneratorType;
  workoutMoveIndex: Scalars['Int'];
  target: WorkoutSetGeneratorTarget;
  roundFrequency: Scalars['Int'];
  adjustAmount: Scalars['Float'];
  WorkoutSet: ConnectRelationInput;
};

export type CreateWorkoutSetInput = {
  sortPosition: Scalars['Int'];
  rounds?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  WorkoutSection: ConnectRelationInput;
};

export type CreateWorkoutSetIntervalBuyInInput = {
  interval: Scalars['Int'];
  WorkoutMove: CreateWorkoutMoveInput;
  WorkoutSet: ConnectRelationInput;
};

export type CreateWorkoutTagInput = {
  tag: Scalars['String'];
};


export enum DifficultyLevel {
  Light = 'LIGHT',
  Challenging = 'CHALLENGING',
  Intermediate = 'INTERMEDIATE',
  Advanced = 'ADVANCED',
  Elite = 'ELITE'
}

export enum DistanceUnit {
  Metres = 'METRES',
  Kilometres = 'KILOMETRES',
  Yards = 'YARDS',
  Miles = 'MILES'
}

export type Equipment = {
  __typename?: 'Equipment';
  id: Scalars['ID'];
  name: Scalars['String'];
  altNames?: Maybe<Scalars['String']>;
  loadAdjustable: Scalars['Boolean'];
};

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Nonbinary = 'NONBINARY',
  None = 'NONE'
}

export type GymProfile = {
  __typename?: 'GymProfile';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  Equipments: Array<Equipment>;
};

export enum LoadUnit {
  Kg = 'KG',
  Lb = 'LB',
  Bodyweightpercent = 'BODYWEIGHTPERCENT'
}

export type LoggedWorkout = {
  __typename?: 'LoggedWorkout';
  id: Scalars['ID'];
  completedOn: Scalars['DateTime'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  imageUri?: Maybe<Scalars['String']>;
  LoggedWorkoutSections: Array<LoggedWorkoutSection>;
  Workout: Workout;
  ScheduledWorkout?: Maybe<ScheduledWorkout>;
  GymProfile?: Maybe<GymProfile>;
  WorkoutProgramWorkout?: Maybe<WorkoutProgramWorkout>;
  WorkoutProgramEnrolment?: Maybe<WorkoutProgramWorkout>;
};

export type LoggedWorkoutMove = {
  __typename?: 'LoggedWorkoutMove';
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
  timeTakenMs?: Maybe<Scalars['Int']>;
  repType: WorkoutMoveRepType;
  reps: Scalars['Float'];
  distanceUnit: DistanceUnit;
  loadAmount?: Maybe<Scalars['Float']>;
  loadUnit: LoadUnit;
  Move: Move;
  Equipment?: Maybe<Equipment>;
};

export type LoggedWorkoutSection = {
  __typename?: 'LoggedWorkoutSection';
  id: Scalars['ID'];
  setIndex: Scalars['Int'];
  roundIndex: Scalars['Int'];
  timeTakenMs: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
  WorkoutSectionType: WorkoutSectionType;
  LoggedWorkoutSets: Array<LoggedWorkoutSet>;
  LoggedWorkout: LoggedWorkout;
};

export type LoggedWorkoutSet = {
  __typename?: 'LoggedWorkoutSet';
  id: Scalars['ID'];
  setIndex: Scalars['Int'];
  roundIndex: Scalars['Int'];
  timeTakenMs?: Maybe<Scalars['Int']>;
  LoggedWorkoutMoves: Array<LoggedWorkoutMove>;
};

export type Move = {
  __typename?: 'Move';
  id: Scalars['ID'];
  name: Scalars['String'];
  searchTerms?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  demoVideoUri?: Maybe<Scalars['String']>;
  demoVideoThumbUri?: Maybe<Scalars['String']>;
  scope: MoveScope;
  MoveType: MoveType;
  validRepTypes: Array<WorkoutMoveRepType>;
  RequiredEquipments: Array<Equipment>;
  SelectableEquipments: Array<Equipment>;
  BodyAreaMoveScores: Array<BodyAreaMoveScore>;
};

/**
 * Standard moves are built in / official.
 * Custom moves are created by users.
 */
export enum MoveScope {
  Standard = 'STANDARD',
  Custom = 'CUSTOM'
}

export type MoveSummary = {
  __typename?: 'MoveSummary';
  id: Scalars['ID'];
  name: Scalars['String'];
  RequiredEquipments: Array<Equipment>;
};

export type MoveType = {
  __typename?: 'MoveType';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageUri?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEquipment?: Maybe<Equipment>;
  updateEquipment?: Maybe<Equipment>;
  createGymProfile: GymProfile;
  updateGymProfile: GymProfile;
  deleteGymProfileById?: Maybe<Scalars['ID']>;
  createProgressJournal: ProgressJournal;
  updateProgressJournal: ProgressJournal;
  deleteProgressJournalById: Scalars['ID'];
  createProgressJournalEntry: ProgressJournalEntry;
  updateProgressJournalEntry: ProgressJournalEntry;
  deleteProgressJournalEntryById: Scalars['ID'];
  createProgressJournalGoal: ProgressJournalGoal;
  updateProgressJournalGoal: ProgressJournalGoal;
  deleteProgressJournalGoalById: Scalars['ID'];
  createProgressJournalGoalTag: ProgressJournalGoalTag;
  updateProgressJournalGoalTag: ProgressJournalGoalTag;
  deleteProgressJournalGoalTagById: Scalars['ID'];
  createLoggedWorkout: LoggedWorkout;
  updateLoggedWorkout: LoggedWorkout;
  deleteLoggedWorkoutById: Scalars['ID'];
  createLoggedWorkoutSection: LoggedWorkoutSection;
  updateLoggedWorkoutSection: LoggedWorkoutSection;
  deleteLoggedWorkoutSectionById: Scalars['ID'];
  reorderLoggedWorkoutSections: Array<LoggedWorkoutSection>;
  createLoggedWorkoutSet: LoggedWorkoutSet;
  updateLoggedWorkoutSet: LoggedWorkoutSet;
  deleteLoggedWorkoutSetById: Scalars['ID'];
  reorderLoggedWorkoutSets: Array<LoggedWorkoutSet>;
  createLoggedWorkoutMove: LoggedWorkoutMove;
  updateLoggedWorkoutMove: LoggedWorkoutMove;
  deleteLoggedWorkoutMoveById: Scalars['ID'];
  reorderLoggedWorkoutMoves: Array<LoggedWorkoutMove>;
  createMove: Move;
  updateMove: Move;
  softDeleteMoveById: Scalars['ID'];
  createScheduledWorkout: ScheduledWorkout;
  updateScheduledWorkout: ScheduledWorkout;
  deleteScheduledWorkoutById: Scalars['ID'];
  updateUser: User;
  createWorkoutTag: WorkoutTag;
  makeCopyWorkoutById: Workout;
  createWorkout: Workout;
  updateWorkout: Workout;
  duplicateWorkoutById: Workout;
  softDeleteWorkoutById?: Maybe<Scalars['ID']>;
  createWorkoutSection: WorkoutSection;
  updateWorkoutSection: WorkoutSection;
  deleteWorkoutSectionById: Scalars['ID'];
  reorderWorkoutSections: Array<SortPositionUpdated>;
  createWorkoutSet: WorkoutSet;
  updateWorkoutSet: WorkoutSet;
  duplicateWorkoutSetById: WorkoutSet;
  deleteWorkoutSetById: Scalars['ID'];
  reorderWorkoutSets: Array<SortPositionUpdated>;
  createWorkoutSetIntervalBuyIn: WorkoutSetIntervalBuyIn;
  updateWorkoutSetIntervalBuyIn: WorkoutSetIntervalBuyIn;
  deleteWorkoutSetIntervalBuyInById: Scalars['ID'];
  createWorkoutSetGenerator: WorkoutSetGenerator;
  updateWorkoutSetGenerator: WorkoutSetGenerator;
  deleteWorkoutSetGeneratorById: Scalars['ID'];
  createWorkoutMove: WorkoutMove;
  updateWorkoutMove: WorkoutMove;
  deleteWorkoutMoveById: Scalars['ID'];
  duplicateWorkoutMoveById: WorkoutMove;
  reorderWorkoutMoves: Array<SortPositionUpdated>;
  createWorkoutProgram: WorkoutProgram;
  updateWorkoutProgram: WorkoutProgram;
  softDeleteWorkoutProgramById: Scalars['ID'];
  createWorkoutProgramWorkout: WorkoutProgramWorkout;
  updateWorkoutProgramWorkout: WorkoutProgramWorkout;
  deleteWorkoutProgramWorkoutById: Scalars['ID'];
  createWorkoutProgramEnrolment: WorkoutProgramEnrolment;
  deleteWorkoutProgramEnrolmentById: Scalars['ID'];
  createWorkoutProgramReview: WorkoutProgramReview;
  updateWorkoutProgramReview: WorkoutProgramReview;
  deleteWorkoutProgramReviewById: Scalars['ID'];
};


export type MutationCreateEquipmentArgs = {
  data: CreateEquipmentInput;
};


export type MutationUpdateEquipmentArgs = {
  data: UpdateEquipmentInput;
};


export type MutationCreateGymProfileArgs = {
  data: CreateGymProfileInput;
};


export type MutationUpdateGymProfileArgs = {
  data: UpdateGymProfileInput;
};


export type MutationDeleteGymProfileByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProgressJournalArgs = {
  data: CreateProgressJournalInput;
};


export type MutationUpdateProgressJournalArgs = {
  data: UpdateProgressJournalInput;
};


export type MutationDeleteProgressJournalByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProgressJournalEntryArgs = {
  data: CreateProgressJournalEntryInput;
};


export type MutationUpdateProgressJournalEntryArgs = {
  data: UpdateProgressJournalEntryInput;
};


export type MutationDeleteProgressJournalEntryByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProgressJournalGoalArgs = {
  data: CreateProgressJournalGoalInput;
};


export type MutationUpdateProgressJournalGoalArgs = {
  data: UpdateProgressJournalGoalInput;
};


export type MutationDeleteProgressJournalGoalByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProgressJournalGoalTagArgs = {
  data: CreateProgressJournalGoalTagInput;
};


export type MutationUpdateProgressJournalGoalTagArgs = {
  data: UpdateProgressJournalGoalTagInput;
};


export type MutationDeleteProgressJournalGoalTagByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLoggedWorkoutArgs = {
  data: CreateLoggedWorkoutInput;
};


export type MutationUpdateLoggedWorkoutArgs = {
  data: UpdateLoggedWorkoutInput;
};


export type MutationDeleteLoggedWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateLoggedWorkoutSectionArgs = {
  data: CreateLoggedWorkoutSectionInput;
};


export type MutationUpdateLoggedWorkoutSectionArgs = {
  data: UpdateLoggedWorkoutSectionInput;
};


export type MutationDeleteLoggedWorkoutSectionByIdArgs = {
  id: Scalars['ID'];
};


export type MutationReorderLoggedWorkoutSectionsArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationCreateLoggedWorkoutSetArgs = {
  data: CreateLoggedWorkoutSetInput;
};


export type MutationUpdateLoggedWorkoutSetArgs = {
  data: UpdateLoggedWorkoutSetInput;
};


export type MutationDeleteLoggedWorkoutSetByIdArgs = {
  id: Scalars['ID'];
};


export type MutationReorderLoggedWorkoutSetsArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationCreateLoggedWorkoutMoveArgs = {
  data: CreateLoggedWorkoutMoveInput;
};


export type MutationUpdateLoggedWorkoutMoveArgs = {
  data: UpdateLoggedWorkoutMoveInput;
};


export type MutationDeleteLoggedWorkoutMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationReorderLoggedWorkoutMovesArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationCreateMoveArgs = {
  data: CreateMoveInput;
};


export type MutationUpdateMoveArgs = {
  data: UpdateMoveInput;
};


export type MutationSoftDeleteMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateScheduledWorkoutArgs = {
  data: CreateScheduledWorkoutInput;
};


export type MutationUpdateScheduledWorkoutArgs = {
  data: UpdateScheduledWorkoutInput;
};


export type MutationDeleteScheduledWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationCreateWorkoutTagArgs = {
  data: CreateWorkoutTagInput;
};


export type MutationMakeCopyWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateWorkoutArgs = {
  data: CreateWorkoutInput;
};


export type MutationUpdateWorkoutArgs = {
  data: UpdateWorkoutInput;
};


export type MutationDuplicateWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationSoftDeleteWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateWorkoutSectionArgs = {
  data: CreateWorkoutSectionInput;
};


export type MutationUpdateWorkoutSectionArgs = {
  data: UpdateWorkoutSectionInput;
};


export type MutationDeleteWorkoutSectionByIdArgs = {
  id: Scalars['ID'];
};


export type MutationReorderWorkoutSectionsArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationCreateWorkoutSetArgs = {
  data: CreateWorkoutSetInput;
};


export type MutationUpdateWorkoutSetArgs = {
  data: UpdateWorkoutSetInput;
};


export type MutationDuplicateWorkoutSetByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkoutSetByIdArgs = {
  id: Scalars['ID'];
};


export type MutationReorderWorkoutSetsArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationCreateWorkoutSetIntervalBuyInArgs = {
  data: CreateWorkoutSetIntervalBuyInInput;
};


export type MutationUpdateWorkoutSetIntervalBuyInArgs = {
  data: UpdateWorkoutSetIntervalBuyInInput;
};


export type MutationDeleteWorkoutSetIntervalBuyInByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateWorkoutSetGeneratorArgs = {
  data: CreateWorkoutSetGeneratorInput;
};


export type MutationUpdateWorkoutSetGeneratorArgs = {
  data: UpdateWorkoutSetGeneratorInput;
};


export type MutationDeleteWorkoutSetGeneratorByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateWorkoutMoveArgs = {
  data: CreateWorkoutMoveInput;
};


export type MutationUpdateWorkoutMoveArgs = {
  data: UpdateWorkoutMoveInput;
};


export type MutationDeleteWorkoutMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicateWorkoutMoveByIdArgs = {
  id: Scalars['ID'];
};


export type MutationReorderWorkoutMovesArgs = {
  data: Array<UpdateSortPositionInput>;
};


export type MutationCreateWorkoutProgramArgs = {
  data: CreateWorkoutProgramInput;
};


export type MutationUpdateWorkoutProgramArgs = {
  data: UpdateWorkoutProgramInput;
};


export type MutationSoftDeleteWorkoutProgramByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateWorkoutProgramWorkoutArgs = {
  data: CreateWorkoutProgramWorkoutInput;
};


export type MutationUpdateWorkoutProgramWorkoutArgs = {
  data: UpdateWorkoutProgramWorkoutInput;
};


export type MutationDeleteWorkoutProgramWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateWorkoutProgramEnrolmentArgs = {
  workoutProgramId: Scalars['ID'];
};


export type MutationDeleteWorkoutProgramEnrolmentByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreateWorkoutProgramReviewArgs = {
  data: CreateWorkoutProgramReviewInput;
};


export type MutationUpdateWorkoutProgramReviewArgs = {
  data: UpdateWorkoutProgramReviewInput;
};


export type MutationDeleteWorkoutProgramReviewByIdArgs = {
  id: Scalars['ID'];
};

export type ProgressJournal = {
  __typename?: 'ProgressJournal';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ProgressJournalEntries?: Maybe<Array<ProgressJournalEntry>>;
  ProgressJournalGoals?: Maybe<Array<ProgressJournalGoal>>;
};

export type ProgressJournalEntry = {
  __typename?: 'ProgressJournalEntry';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  note?: Maybe<Scalars['String']>;
  voiceNoteUri?: Maybe<Scalars['String']>;
  bodyweight?: Maybe<Scalars['Float']>;
  moodScore?: Maybe<Scalars['Float']>;
  energyScore?: Maybe<Scalars['Float']>;
  stressScore?: Maybe<Scalars['Float']>;
  motivationScore?: Maybe<Scalars['Float']>;
  progressPhotoUris?: Maybe<Array<Scalars['String']>>;
  ProgressJournal: ProgressJournal;
};

export type ProgressJournalGoal = {
  __typename?: 'ProgressJournalGoal';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['DateTime']>;
  completedDate?: Maybe<Scalars['DateTime']>;
  ProgressJournalGoalTags?: Maybe<Array<ProgressJournalGoalTag>>;
};

export type ProgressJournalGoalTag = {
  __typename?: 'ProgressJournalGoalTag';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  tag: Scalars['String'];
  hexColor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  validateToken: Scalars['Boolean'];
  bodyAreas: Array<BodyArea>;
  equipments: Array<Equipment>;
  moveTypes: Array<MoveType>;
  workoutGoals: Array<WorkoutGoal>;
  workoutSectionTypes: Array<WorkoutSectionType>;
  userLoggedWorkouts: Array<LoggedWorkout>;
  standardMoves: Array<Move>;
  userCustomMoves: Array<Move>;
  userProgressJournals: Array<ProgressJournal>;
  progressJournalById: ProgressJournal;
  progressJournalGoalTags: Array<ProgressJournalGoalTag>;
  userScheduledWorkouts: Array<ScheduledWorkout>;
  textSearchWorkouts?: Maybe<Array<TextSearchWorkoutResult>>;
  textSearchWorkoutPrograms?: Maybe<Array<TextSearchWorkoutProgramResult>>;
  textSearchCreatorPublicProfiles?: Maybe<Array<UserPublicProfile>>;
  checkUniqueDisplayName: Scalars['Boolean'];
  authedUser: User;
  gymProfiles: Array<GymProfile>;
  userWorkoutTags: Array<WorkoutTag>;
  userPublicProfiles?: Maybe<Array<UserPublicProfile>>;
  userPublicProfileByUserId: UserPublicProfile;
  officialWorkouts: Array<WorkoutSummary>;
  publicWorkouts: Array<WorkoutSummary>;
  userWorkouts: Array<WorkoutSummary>;
  workoutById: Workout;
  officialWorkoutPrograms: Array<WorkoutProgram>;
  publicWorkoutPrograms: Array<WorkoutProgram>;
  workoutProgramById: WorkoutProgram;
  userWorkoutPrograms: Array<WorkoutProgram>;
  userWorkoutProgramEnrolments?: Maybe<Array<WorkoutProgramEnrolment>>;
};


export type QueryProgressJournalByIdArgs = {
  progressJournalId: Scalars['ID'];
};


export type QueryTextSearchWorkoutsArgs = {
  text: Scalars['String'];
};


export type QueryTextSearchWorkoutProgramsArgs = {
  text: Scalars['String'];
};


export type QueryTextSearchCreatorPublicProfilesArgs = {
  text: Scalars['String'];
};


export type QueryCheckUniqueDisplayNameArgs = {
  displayName: Scalars['String'];
};


export type QueryUserPublicProfileByUserIdArgs = {
  userId: Scalars['ID'];
};


export type QueryWorkoutByIdArgs = {
  id: Scalars['ID'];
};


export type QueryWorkoutProgramByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUserWorkoutProgramEnrolmentsArgs = {
  workoutProgramId: Scalars['ID'];
};

export type ScheduledWorkout = {
  __typename?: 'ScheduledWorkout';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  scheduledAt: Scalars['DateTime'];
  note?: Maybe<Scalars['String']>;
  Workout: Workout;
  LoggedWorkout?: Maybe<LoggedWorkout>;
  GymProfile?: Maybe<GymProfile>;
};

export type SortPositionUpdated = {
  __typename?: 'SortPositionUpdated';
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
};

export type TextSearchWorkoutProgramResult = {
  __typename?: 'TextSearchWorkoutProgramResult';
  id: Scalars['ID'];
  scope: ContentAccessScope;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imageUri?: Maybe<Scalars['String']>;
  User?: Maybe<User>;
  WorkoutGoals: Array<WorkoutGoal>;
  WorkoutProgramWorkouts?: Maybe<Array<WorkoutProgramWorkout>>;
};

export type TextSearchWorkoutResult = {
  __typename?: 'TextSearchWorkoutResult';
  id: Scalars['ID'];
  scope: ContentAccessScope;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUri?: Maybe<Scalars['String']>;
  difficultyLevel: Scalars['Int'];
  timecap?: Maybe<Scalars['Int']>;
  User?: Maybe<User>;
};

export enum TimeUnit {
  Hours = 'HOURS',
  Minutes = 'MINUTES',
  Seconds = 'SECONDS'
}

export type UpdateEquipmentInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  altNames?: Maybe<Scalars['String']>;
  loadAdjustable?: Maybe<Scalars['Boolean']>;
};

export type UpdateGymProfileInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  Equipments?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateLoggedWorkoutInput = {
  id: Scalars['ID'];
  completedOn?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  imageUri?: Maybe<Scalars['String']>;
  ScheduledWorkout?: Maybe<Scalars['ID']>;
  GymProfile?: Maybe<Scalars['ID']>;
  WorkoutProgramWorkout?: Maybe<Scalars['ID']>;
  WorkoutProgramEnrolment?: Maybe<Scalars['ID']>;
};

export type UpdateLoggedWorkoutMoveInput = {
  id: Scalars['ID'];
  timeTakenMs?: Maybe<Scalars['Int']>;
  reps?: Maybe<Scalars['Float']>;
  distanceUnit?: Maybe<DistanceUnit>;
  loadAmount?: Maybe<Scalars['Float']>;
  loadUnit?: Maybe<LoadUnit>;
  Move?: Maybe<Scalars['ID']>;
  Equipment?: Maybe<Scalars['ID']>;
};

export type UpdateLoggedWorkoutSectionInput = {
  id: Scalars['ID'];
  timeTakenMs?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
};

export type UpdateLoggedWorkoutSetInput = {
  id: Scalars['ID'];
  timeTakenMs?: Maybe<Scalars['Int']>;
};

export type UpdateMoveInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  searchTerms?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  demoVideoUri?: Maybe<Scalars['String']>;
  demoVideoThumbUri?: Maybe<Scalars['String']>;
  scope?: Maybe<MoveScope>;
  MoveType?: Maybe<ConnectRelationInput>;
  validRepTypes?: Maybe<Array<WorkoutMoveRepType>>;
  RequiredEquipments?: Maybe<Array<ConnectRelationInput>>;
  SelectableEquipments?: Maybe<Array<ConnectRelationInput>>;
  BodyAreaMoveScores?: Maybe<Array<BodyAreaMoveScoreInput>>;
};

export type UpdateProgressJournalEntryInput = {
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  voiceNoteUri?: Maybe<Scalars['String']>;
  bodyweight?: Maybe<Scalars['Float']>;
  moodScore?: Maybe<Scalars['Float']>;
  energyScore?: Maybe<Scalars['Float']>;
  stressScore?: Maybe<Scalars['Float']>;
  motivationScore?: Maybe<Scalars['Float']>;
  progressPhotoUris?: Maybe<Array<Scalars['String']>>;
};

export type UpdateProgressJournalGoalInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  completedDate?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  ProgressJournalGoalTags?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateProgressJournalGoalTagInput = {
  id: Scalars['ID'];
  tag?: Maybe<Scalars['String']>;
  hexColor?: Maybe<Scalars['String']>;
};

export type UpdateProgressJournalInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateScheduledWorkoutInput = {
  id: Scalars['ID'];
  scheduledAt?: Maybe<Scalars['DateTime']>;
  note?: Maybe<Scalars['String']>;
  Workout?: Maybe<Scalars['ID']>;
  LoggedWorkout?: Maybe<Scalars['ID']>;
  GymProfile?: Maybe<Scalars['ID']>;
};

export type UpdateSortPositionInput = {
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
};

export type UpdateUserInput = {
  userProfileScope?: Maybe<UserProfileScope>;
  avatarUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  tiktokUrl?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
  snapUrl?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  hasOnboarded?: Maybe<Scalars['Boolean']>;
  lastname?: Maybe<Scalars['String']>;
};

export type UpdateWorkoutInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  coverImageUri?: Maybe<Scalars['String']>;
  difficultyLevel?: Maybe<DifficultyLevel>;
  contentAccessScope?: Maybe<ContentAccessScope>;
  WorkoutGoals?: Maybe<Array<ConnectRelationInput>>;
  WorkoutTags?: Maybe<Array<ConnectRelationInput>>;
};

export type UpdateWorkoutMoveInput = {
  id: Scalars['ID'];
  reps?: Maybe<Scalars['Float']>;
  repType?: Maybe<WorkoutMoveRepType>;
  distanceUnit?: Maybe<DistanceUnit>;
  loadAmount?: Maybe<Scalars['Float']>;
  loadUnit?: Maybe<LoadUnit>;
  timeUnit?: Maybe<TimeUnit>;
  Move?: Maybe<ConnectRelationInput>;
  Equipment?: Maybe<ConnectRelationInput>;
};

export type UpdateWorkoutProgramInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  coverImageUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  contentAccessScope?: Maybe<ContentAccessScope>;
  WorkoutGoals?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateWorkoutProgramReviewInput = {
  id: Scalars['ID'];
  score?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
};

export type UpdateWorkoutProgramWorkoutInput = {
  id: Scalars['ID'];
  dayNumber: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
  Workout: Scalars['ID'];
};

export type UpdateWorkoutSectionInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  rounds?: Maybe<Scalars['Int']>;
  timecap?: Maybe<Scalars['Int']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  classVideoUri?: Maybe<Scalars['String']>;
  classVideoThumbUri?: Maybe<Scalars['String']>;
  classAudioUri?: Maybe<Scalars['String']>;
  outroVideoUri?: Maybe<Scalars['String']>;
  outroVideoThumbUri?: Maybe<Scalars['String']>;
  outroAudioUri?: Maybe<Scalars['String']>;
  WorkoutSectionType?: Maybe<ConnectRelationInput>;
};

export type UpdateWorkoutSetGeneratorInput = {
  id: Scalars['ID'];
  type?: Maybe<WorkoutSetGeneratorType>;
  workoutMoveIndex?: Maybe<Scalars['Int']>;
  target?: Maybe<WorkoutSetGeneratorTarget>;
  roundFrequency?: Maybe<Scalars['Int']>;
  adjustAmount?: Maybe<Scalars['Float']>;
};

export type UpdateWorkoutSetInput = {
  id: Scalars['ID'];
  rounds?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
};

export type UpdateWorkoutSetIntervalBuyInInput = {
  id: Scalars['ID'];
  interval?: Maybe<Scalars['Int']>;
  WorkoutMove?: Maybe<UpdateWorkoutMoveInput>;
};

export type UpdateWorkoutTagInput = {
  id: Scalars['ID'];
  tag: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  userProfileScope: UserProfileScope;
  avatarUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  instagramUrl?: Maybe<Scalars['String']>;
  tiktokUrl?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
  snapUrl?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  hasOnboarded: Scalars['Boolean'];
  GymProfiles?: Maybe<Array<GymProfile>>;
  ProgressJournalGoalTags?: Maybe<Array<ProgressJournalGoalTag>>;
};

export type UserPrivateProfile = {
  __typename?: 'UserPrivateProfile';
  LoggedWorkouts?: Maybe<Array<LoggedWorkout>>;
  Workouts?: Maybe<Array<Workout>>;
  WorkoutPrograms?: Maybe<Array<WorkoutProgram>>;
  WorkoutProgramEnrolments?: Maybe<Array<WorkoutProgramEnrolment>>;
};

export enum UserProfileScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type UserPublicProfile = {
  __typename?: 'UserPublicProfile';
  id: Scalars['ID'];
  avatarUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  tiktokUrl?: Maybe<Scalars['String']>;
  youtubeUrl?: Maybe<Scalars['String']>;
  snapUrl?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  CustomMoves?: Maybe<Array<Move>>;
  Workouts?: Maybe<Array<Workout>>;
  WorkoutPrograms?: Maybe<Array<WorkoutProgram>>;
};

export type UserSummary = {
  __typename?: 'UserSummary';
  id: Scalars['ID'];
  displayName: Scalars['String'];
  avatarUri?: Maybe<Scalars['String']>;
};

export type Workout = {
  __typename?: 'Workout';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserSummary>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  coverImageUri?: Maybe<Scalars['String']>;
  difficultyLevel: DifficultyLevel;
  contentAccessScope: ContentAccessScope;
  WorkoutGoals: Array<WorkoutGoal>;
  WorkoutTags: Array<WorkoutTag>;
  WorkoutSections: Array<WorkoutSection>;
};

export type WorkoutGoal = {
  __typename?: 'WorkoutGoal';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type WorkoutMove = {
  __typename?: 'WorkoutMove';
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
  reps: Scalars['Float'];
  repType: WorkoutMoveRepType;
  distanceUnit: DistanceUnit;
  loadAmount: Scalars['Float'];
  loadUnit: LoadUnit;
  timeUnit: TimeUnit;
  Move: Move;
  Equipment?: Maybe<Equipment>;
};

export enum WorkoutMoveRepType {
  Reps = 'REPS',
  Calories = 'CALORIES',
  Distance = 'DISTANCE',
  Time = 'TIME'
}

export type WorkoutMoveSummary = {
  __typename?: 'WorkoutMoveSummary';
  id: Scalars['ID'];
  Equipment?: Maybe<Equipment>;
  Move: MoveSummary;
};

export type WorkoutProgram = {
  __typename?: 'WorkoutProgram';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  coverImageUri?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  contentAccessScope: ContentAccessScope;
  User?: Maybe<User>;
  Enrolments?: Maybe<Array<WorkoutProgramEnrolment>>;
  WorkoutGoals: Array<WorkoutGoal>;
  WorkoutProgramWorkouts: Array<WorkoutProgramWorkout>;
  WorkoutProgramReviews?: Maybe<Array<WorkoutProgramReview>>;
};

export type WorkoutProgramEnrolment = {
  __typename?: 'WorkoutProgramEnrolment';
  id: Scalars['ID'];
  startDate: Scalars['DateTime'];
  User: User;
  WorkoutProgram: WorkoutProgram;
  LoggedWorkouts?: Maybe<Array<LoggedWorkout>>;
};

export type WorkoutProgramReview = {
  __typename?: 'WorkoutProgramReview';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  score: Scalars['Float'];
  comment?: Maybe<Scalars['String']>;
  User: User;
};

export type WorkoutProgramWorkout = {
  __typename?: 'WorkoutProgramWorkout';
  id: Scalars['ID'];
  dayNumber: Scalars['Float'];
  note?: Maybe<Scalars['String']>;
  Workout: Workout;
};

export type WorkoutSection = {
  __typename?: 'WorkoutSection';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  rounds: Scalars['Int'];
  timecap?: Maybe<Scalars['Int']>;
  sortPosition: Scalars['Int'];
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  classVideoUri?: Maybe<Scalars['String']>;
  classVideoThumbUri?: Maybe<Scalars['String']>;
  classAudioUri?: Maybe<Scalars['String']>;
  outroVideoUri?: Maybe<Scalars['String']>;
  outroVideoThumbUri?: Maybe<Scalars['String']>;
  outroAudioUri?: Maybe<Scalars['String']>;
  WorkoutSectionType: WorkoutSectionType;
  WorkoutSets: Array<WorkoutSet>;
};

export type WorkoutSectionSummary = {
  __typename?: 'WorkoutSectionSummary';
  id: Scalars['ID'];
  timecap?: Maybe<Scalars['Int']>;
  WorkoutSectionType: WorkoutSectionType;
  WorkoutSets: Array<WorkoutSetSummary>;
};

export type WorkoutSectionType = {
  __typename?: 'WorkoutSectionType';
  id: Scalars['ID'];
  name: Scalars['String'];
  subtitle: Scalars['String'];
  description: Scalars['String'];
  validRepTypes: Array<WorkoutMoveRepType>;
  WorkoutSections: Array<WorkoutSection>;
  LoggedWorkoutSections: Array<LoggedWorkoutSection>;
};

export type WorkoutSet = {
  __typename?: 'WorkoutSet';
  id: Scalars['ID'];
  sortPosition: Scalars['Int'];
  rounds: Scalars['Int'];
  duration?: Maybe<Scalars['Int']>;
  WorkoutMoves: Array<WorkoutMove>;
};

export type WorkoutSetGenerator = {
  __typename?: 'WorkoutSetGenerator';
  id: Scalars['ID'];
  type: WorkoutSetGeneratorType;
  workoutMoveIndex: Scalars['Int'];
  target: WorkoutSetGeneratorTarget;
  roundFrequency: Scalars['Int'];
  adjustAmount: Scalars['Float'];
  WorkoutSet: WorkoutSet;
};

export enum WorkoutSetGeneratorTarget {
  Reps = 'REPS',
  Load = 'LOAD'
}

export enum WorkoutSetGeneratorType {
  Ladderup = 'LADDERUP',
  Ladderdown = 'LADDERDOWN',
  Pyramidup = 'PYRAMIDUP',
  Pyramiddown = 'PYRAMIDDOWN'
}

export type WorkoutSetIntervalBuyIn = {
  __typename?: 'WorkoutSetIntervalBuyIn';
  id: Scalars['ID'];
  interval: Scalars['Int'];
  WorkoutMove: WorkoutMove;
};

export type WorkoutSetSummary = {
  __typename?: 'WorkoutSetSummary';
  id: Scalars['ID'];
  WorkoutMoves: Array<WorkoutMoveSummary>;
};

export type WorkoutSummary = {
  __typename?: 'WorkoutSummary';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserSummary>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  introVideoUri?: Maybe<Scalars['String']>;
  introVideoThumbUri?: Maybe<Scalars['String']>;
  introAudioUri?: Maybe<Scalars['String']>;
  coverImageUri?: Maybe<Scalars['String']>;
  difficultyLevel: DifficultyLevel;
  contentAccessScope: ContentAccessScope;
  WorkoutGoals: Array<WorkoutGoal>;
  WorkoutTags: Array<WorkoutTag>;
  WorkoutSections: Array<WorkoutSectionSummary>;
};

export type WorkoutTag = {
  __typename?: 'WorkoutTag';
  id: Scalars['ID'];
  User: User;
  tag: Scalars['String'];
};

export type EquipmentFieldsFragment = (
  { __typename?: 'Equipment' }
  & Pick<Equipment, 'id' | 'name' | 'altNames' | 'loadAdjustable'>
);

export type BodyAreaFieldsFragment = (
  { __typename?: 'BodyArea' }
  & Pick<BodyArea, 'id' | 'name' | 'altNames' | 'frontBack' | 'upperLower'>
);

export type MoveTypeFieldsFragment = (
  { __typename?: 'MoveType' }
  & Pick<MoveType, 'id' | 'name' | 'description' | 'imageUri'>
);

export type BodyAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type BodyAreasQuery = (
  { __typename?: 'Query' }
  & { bodyAreas: Array<(
    { __typename?: 'BodyArea' }
    & BodyAreaFieldsFragment
  )> }
);

export type CreateEquipmentMutationVariables = Exact<{
  data: CreateEquipmentInput;
}>;


export type CreateEquipmentMutation = (
  { __typename?: 'Mutation' }
  & { createEquipment?: Maybe<(
    { __typename?: 'Equipment' }
    & EquipmentFieldsFragment
  )> }
);

export type EquipmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type EquipmentsQuery = (
  { __typename?: 'Query' }
  & { equipments: Array<(
    { __typename?: 'Equipment' }
    & EquipmentFieldsFragment
  )> }
);

export type UpdateEquipmentMutationVariables = Exact<{
  data: UpdateEquipmentInput;
}>;


export type UpdateEquipmentMutation = (
  { __typename?: 'Mutation' }
  & { updateEquipment?: Maybe<(
    { __typename?: 'Equipment' }
    & EquipmentFieldsFragment
  )> }
);

export type CreateMoveMutationVariables = Exact<{
  data: CreateMoveInput;
}>;


export type CreateMoveMutation = (
  { __typename?: 'Mutation' }
  & { createMove: (
    { __typename?: 'Move' }
    & Pick<Move, 'id' | 'name' | 'description' | 'searchTerms' | 'validRepTypes' | 'demoVideoUri'>
    & { MoveType: (
      { __typename?: 'MoveType' }
      & MoveTypeFieldsFragment
    ), RequiredEquipments: Array<(
      { __typename?: 'Equipment' }
      & EquipmentFieldsFragment
    )>, SelectableEquipments: Array<(
      { __typename?: 'Equipment' }
      & EquipmentFieldsFragment
    )>, BodyAreaMoveScores: Array<(
      { __typename?: 'BodyAreaMoveScore' }
      & Pick<BodyAreaMoveScore, 'score'>
      & { BodyArea: (
        { __typename?: 'BodyArea' }
        & BodyAreaFieldsFragment
      ) }
    )> }
  ) }
);

export type StandardMovesQueryVariables = Exact<{ [key: string]: never; }>;


export type StandardMovesQuery = (
  { __typename?: 'Query' }
  & { standardMoves: Array<(
    { __typename?: 'Move' }
    & Pick<Move, 'id' | 'name' | 'description' | 'searchTerms' | 'validRepTypes' | 'demoVideoUri'>
    & { MoveType: (
      { __typename?: 'MoveType' }
      & MoveTypeFieldsFragment
    ), RequiredEquipments: Array<(
      { __typename?: 'Equipment' }
      & EquipmentFieldsFragment
    )>, SelectableEquipments: Array<(
      { __typename?: 'Equipment' }
      & EquipmentFieldsFragment
    )>, BodyAreaMoveScores: Array<(
      { __typename?: 'BodyAreaMoveScore' }
      & Pick<BodyAreaMoveScore, 'score'>
      & { BodyArea: (
        { __typename?: 'BodyArea' }
        & BodyAreaFieldsFragment
      ) }
    )> }
  )> }
);

export type UpdateMoveMutationVariables = Exact<{
  data: UpdateMoveInput;
}>;


export type UpdateMoveMutation = (
  { __typename?: 'Mutation' }
  & { updateMove: (
    { __typename?: 'Move' }
    & Pick<Move, 'id' | 'name' | 'description' | 'searchTerms' | 'validRepTypes' | 'demoVideoUri'>
    & { MoveType: (
      { __typename?: 'MoveType' }
      & MoveTypeFieldsFragment
    ), RequiredEquipments: Array<(
      { __typename?: 'Equipment' }
      & EquipmentFieldsFragment
    )>, SelectableEquipments: Array<(
      { __typename?: 'Equipment' }
      & EquipmentFieldsFragment
    )>, BodyAreaMoveScores: Array<(
      { __typename?: 'BodyAreaMoveScore' }
      & Pick<BodyAreaMoveScore, 'score'>
      & { BodyArea: (
        { __typename?: 'BodyArea' }
        & BodyAreaFieldsFragment
      ) }
    )> }
  ) }
);

export type MoveTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type MoveTypesQuery = (
  { __typename?: 'Query' }
  & { moveTypes: Array<(
    { __typename?: 'MoveType' }
    & Pick<MoveType, 'id' | 'name' | 'description' | 'imageUri'>
  )> }
);

export type WorkoutGoalsQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkoutGoalsQuery = (
  { __typename?: 'Query' }
  & { workoutGoals: Array<(
    { __typename?: 'WorkoutGoal' }
    & Pick<WorkoutGoal, 'id' | 'name' | 'description'>
  )> }
);

export type WorkoutSectionTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkoutSectionTypesQuery = (
  { __typename?: 'Query' }
  & { workoutSectionTypes: Array<(
    { __typename?: 'WorkoutSectionType' }
    & Pick<WorkoutSectionType, 'id' | 'name' | 'subtitle' | 'description' | 'validRepTypes'>
  )> }
);

export type OfficialWorkoutProgramsQueryVariables = Exact<{ [key: string]: never; }>;


export type OfficialWorkoutProgramsQuery = (
  { __typename?: 'Query' }
  & { officialWorkoutPrograms: Array<(
    { __typename?: 'WorkoutProgram' }
    & Pick<WorkoutProgram, 'id' | 'createdAt' | 'name' | 'description' | 'coverImageUri' | 'introVideoUri' | 'introVideoThumbUri' | 'introAudioUri' | 'contentAccessScope'>
  )> }
);

export type OfficialWorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type OfficialWorkoutsQuery = (
  { __typename?: 'Query' }
  & { officialWorkouts: Array<(
    { __typename?: 'WorkoutSummary' }
    & Pick<WorkoutSummary, 'id' | 'createdAt' | 'name' | 'description' | 'introVideoUri' | 'introVideoThumbUri' | 'introAudioUri' | 'coverImageUri' | 'contentAccessScope' | 'difficultyLevel'>
  )> }
);

export const EquipmentFieldsFragmentDoc = gql`
    fragment EquipmentFields on Equipment {
  id
  name
  altNames
  loadAdjustable
}
    `;
export const BodyAreaFieldsFragmentDoc = gql`
    fragment BodyAreaFields on BodyArea {
  id
  name
  altNames
  frontBack
  upperLower
}
    `;
export const MoveTypeFieldsFragmentDoc = gql`
    fragment MoveTypeFields on MoveType {
  id
  name
  description
  imageUri
}
    `;
export const BodyAreasDocument = gql`
    query bodyAreas {
  bodyAreas {
    ...BodyAreaFields
  }
}
    ${BodyAreaFieldsFragmentDoc}`;

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
    ...EquipmentFields
  }
}
    ${EquipmentFieldsFragmentDoc}`;
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
    ...EquipmentFields
  }
}
    ${EquipmentFieldsFragmentDoc}`;

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
    ...EquipmentFields
  }
}
    ${EquipmentFieldsFragmentDoc}`;
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
      ...MoveTypeFields
    }
    validRepTypes
    demoVideoUri
    RequiredEquipments {
      ...EquipmentFields
    }
    SelectableEquipments {
      ...EquipmentFields
    }
    BodyAreaMoveScores {
      BodyArea {
        ...BodyAreaFields
      }
      score
    }
  }
}
    ${MoveTypeFieldsFragmentDoc}
${EquipmentFieldsFragmentDoc}
${BodyAreaFieldsFragmentDoc}`;
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
      ...MoveTypeFields
    }
    validRepTypes
    demoVideoUri
    RequiredEquipments {
      ...EquipmentFields
    }
    SelectableEquipments {
      ...EquipmentFields
    }
    BodyAreaMoveScores {
      BodyArea {
        ...BodyAreaFields
      }
      score
    }
  }
}
    ${MoveTypeFieldsFragmentDoc}
${EquipmentFieldsFragmentDoc}
${BodyAreaFieldsFragmentDoc}`;

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
      ...MoveTypeFields
    }
    validRepTypes
    demoVideoUri
    RequiredEquipments {
      ...EquipmentFields
    }
    SelectableEquipments {
      ...EquipmentFields
    }
    BodyAreaMoveScores {
      BodyArea {
        ...BodyAreaFields
      }
      score
    }
  }
}
    ${MoveTypeFieldsFragmentDoc}
${EquipmentFieldsFragmentDoc}
${BodyAreaFieldsFragmentDoc}`;
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
export const OfficialWorkoutProgramsDocument = gql`
    query officialWorkoutPrograms {
  officialWorkoutPrograms {
    id
    createdAt
    name
    description
    coverImageUri
    introVideoUri
    introVideoThumbUri
    introAudioUri
    contentAccessScope
  }
}
    `;

/**
 * __useOfficialWorkoutProgramsQuery__
 *
 * To run a query within a React component, call `useOfficialWorkoutProgramsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfficialWorkoutProgramsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfficialWorkoutProgramsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOfficialWorkoutProgramsQuery(baseOptions?: Apollo.QueryHookOptions<OfficialWorkoutProgramsQuery, OfficialWorkoutProgramsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfficialWorkoutProgramsQuery, OfficialWorkoutProgramsQueryVariables>(OfficialWorkoutProgramsDocument, options);
      }
export function useOfficialWorkoutProgramsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficialWorkoutProgramsQuery, OfficialWorkoutProgramsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfficialWorkoutProgramsQuery, OfficialWorkoutProgramsQueryVariables>(OfficialWorkoutProgramsDocument, options);
        }
export type OfficialWorkoutProgramsQueryHookResult = ReturnType<typeof useOfficialWorkoutProgramsQuery>;
export type OfficialWorkoutProgramsLazyQueryHookResult = ReturnType<typeof useOfficialWorkoutProgramsLazyQuery>;
export type OfficialWorkoutProgramsQueryResult = Apollo.QueryResult<OfficialWorkoutProgramsQuery, OfficialWorkoutProgramsQueryVariables>;
export const OfficialWorkoutsDocument = gql`
    query officialWorkouts {
  officialWorkouts {
    id
    createdAt
    name
    description
    introVideoUri
    introVideoThumbUri
    introAudioUri
    coverImageUri
    contentAccessScope
    difficultyLevel
  }
}
    `;

/**
 * __useOfficialWorkoutsQuery__
 *
 * To run a query within a React component, call `useOfficialWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfficialWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfficialWorkoutsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOfficialWorkoutsQuery(baseOptions?: Apollo.QueryHookOptions<OfficialWorkoutsQuery, OfficialWorkoutsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfficialWorkoutsQuery, OfficialWorkoutsQueryVariables>(OfficialWorkoutsDocument, options);
      }
export function useOfficialWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficialWorkoutsQuery, OfficialWorkoutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfficialWorkoutsQuery, OfficialWorkoutsQueryVariables>(OfficialWorkoutsDocument, options);
        }
export type OfficialWorkoutsQueryHookResult = ReturnType<typeof useOfficialWorkoutsQuery>;
export type OfficialWorkoutsLazyQueryHookResult = ReturnType<typeof useOfficialWorkoutsLazyQuery>;
export type OfficialWorkoutsQueryResult = Apollo.QueryResult<OfficialWorkoutsQuery, OfficialWorkoutsQueryVariables>;