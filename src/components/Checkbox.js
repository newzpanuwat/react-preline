export default function Checkbox() {
  return (
    <div class="grid space-y-3">
      <div class="relative flex items-start">
        <div class="flex items-center h-5 mt-1">
          <input
            id="hs-checkbox-delete"
            name="hs-checkbox-delete"
            type="checkbox"
            class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            aria-describedby="hs-checkbox-delete-description"
            checked
          />
        </div>
        <label for="hs-checkbox-delete" class="ml-3">
          <span class="block text-sm font-semibold text-gray-800 dark:text-gray-300">Delete</span>
          <span id="hs-checkbox-delete-description" class="block text-sm text-gray-600 dark:text-gray-500">
            Notify me when this action happens.
          </span>
        </label>
      </div>

      <div class="relative flex items-start">
        <div class="flex items-center h-5 mt-1">
          <input
            id="hs-checkbox-archive"
            name="hs-checkbox-archive"
            type="checkbox"
            class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            aria-describedby="hs-checkbox-archive-description"
          />
        </div>
        <label for="hs-checkbox-archive" class="ml-3">
          <span class="block text-sm font-semibold text-gray-800 dark:text-gray-300">Archive</span>
          <span id="hs-checkbox-archive-description" class="block text-sm text-gray-600 dark:text-gray-500">
            Notify me when this action happens.
          </span>
        </label>
      </div>
    </div>
  );
}
