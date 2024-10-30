const DictionaryTable = function ({ dictionary: dictionary }) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">key</th>
          <th scope="col">value</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        {Object.entries(dictionary).map(([key, value]) => (
          <tr>
            <td class="col-6">{key}</td>
            <td class="col-6">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
