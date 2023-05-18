export default function List() {
  return (
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-dark200 dark:divide-dark700">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-dark500 uppercase">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-dark500 uppercase">
                    Age
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-dark500 uppercase">
                    Address
                  </th>
                  <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-dark500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-dark200 dark:divide-dark700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark800 dark:text-dark200">
                    John Brown
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-dark800 dark:text-dark200">45</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-dark800 dark:text-dark200">
                    New York No. 1 Lake Park
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Delete
                    </a>
                  </td>
                </tr>

                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark800 dark:text-dark200">
                    Jim Green
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-dark800 dark:text-dark200">27</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-dark800 dark:text-dark200">
                    London No. 1 Lake Park
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Delete
                    </a>
                  </td>
                </tr>

                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark800 dark:text-dark200">
                    Joe Black
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-dark800 dark:text-dark200">31</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-dark800 dark:text-dark200">
                    Sidney No. 1 Lake Park
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
