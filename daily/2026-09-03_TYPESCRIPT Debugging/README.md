# TypeScript Generics

## What I wanted to understand

...

## What I discovered


### Debugging in Visual Studio Code

To set up native debugging in VS Code with full breakpoint support in `.ts` files:

#### Step 1: Ensure `sourceMap` is Enabled
Verify that your `tsconfig.json` includes:
```json
"sourceMap": true
```

#### Step 2: Create `.vscode/launch.json`
Create a `.vscode/launch.json` file in your workspace root:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Current TS File (tsx)",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["tsx"],
      "args": ["${file}"],
      "internalConsoleOptions": "openOnSessionStart",
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "name": "Debug Compiled Dist (Node)",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/src/helloworld.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```
notice the importance of the line **"preLaunchTask": "tsc: build - tsconfig.json",** so the debug compiles first the tsconfig
The relative path should be given as (Example) **preLaunchTask": "tsc: build - Engineering-Learning/daily/2026-09-03_TYPESCRIPT Debugging/tsconfig.json"**
### Step 3: Run the Debugger
1. Open any TypeScript file (e.g., `src/helloworld.ts`).
2. Set breakpoints by clicking next to line numbers.
3. Press `F5` (or go to **Run and Debug** in the sidebar and click **Start Debugging**).

---

## Example

...

## What I still don't understand

...