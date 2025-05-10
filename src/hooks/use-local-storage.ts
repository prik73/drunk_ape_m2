import { useState, useEffect } from 'react';

/**
 * Custom hook for persisting state in localStorage
 * 
 * @param {string} key - The localStorage key to store the value
 * @param {any} initialValue - The initial value if nothing exists in localStorage
 * @returns {[any, Function]} - State value and setter function
 */
export function useLocalStorage(key, initialValue) {
  // Create state based on value from localStorage or initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Check if running in browser environment
      if (typeof window === 'undefined') {
        return initialValue;
      }
      
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      
      // Parse stored json or return initialValue if nothing stored
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error, return initialValue
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });
  
  // Update localStorage when state changes
  useEffect(() => {
    try {
      // Check if running in browser environment
      if (typeof window === 'undefined') {
        return;
      }
      
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Log errors in case of localStorage failure
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
}

/**
 * Example usage:
 * 
 * const [name, setName] = useLocalStorage('name', 'John');
 * const [todos, setTodos] = useLocalStorage('todos', []);
 * 
 * // Works just like useState
 * setName('Jane');
 * setTodos([...todos, { text: 'New todo', completed: false }]);
 */