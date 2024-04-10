
import { SourceType } from './source';

type Manipulation<T> = T extends Array<infer U> ? U : never;

export declare abstract class UserType {
    doSomething(client: SourceType<Manipulation<typeof Array<SourceType>>>);
}
