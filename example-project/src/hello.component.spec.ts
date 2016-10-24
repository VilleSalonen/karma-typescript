import { IHelloService } from "./hello-service.interface";
import { HelloComponent } from "./hello.component";

import {log1} from "./example1";
import {log2} from "./example2.spec";

class MockHelloService implements IHelloService {

    public sayHello(): string {
        return "Hello world!";
    }
}

log1();
log2();

describe("HelloComponent", () => {

    it("should say 'Hello world!'", () => {

        let mockHelloService = new MockHelloService();
        let helloComponent = new HelloComponent(mockHelloService);

        expect(helloComponent.sayHello()).toEqual("Hello world!");
    });
});
