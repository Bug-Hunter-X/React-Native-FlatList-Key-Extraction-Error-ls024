# React Native FlatList Key Extraction Error

This repository demonstrates a common error in React Native's FlatList component related to incorrect key extraction.  When updating data dynamically, failure to provide unique keys for each item can lead to unexpected rendering behavior, including stale data and visual glitches.  This example shows the problem and a solution using a reliable key extraction strategy.

## Bug Description

The `bug.js` file showcases a FlatList implementation with a flawed `keyExtractor`.  Observe how the list doesn't update correctly when data changes.  The solution (`bugSolution.js`) provides a corrected version, addressing the key extraction problem. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app on an emulator or device using `react-native run-android` or `react-native run-ios`.
4. Observe the unexpected rendering behavior in the initial example and its correct rendering in the solution example.

## Solution

The primary cause of this issue is the lack of unique and stable keys for each item in the FlatList. The `bugSolution.js` fixes this by using a unique `id` from each data item.  Ensuring the key is stable and unique is crucial for efficient updates and avoiding re-rendering of unnecessary items.