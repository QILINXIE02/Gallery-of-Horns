const [searchTerm, setSearchTerm] = useState('');

<input 
  type="text" 
  placeholder="Search for beasts..." 
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
