"use client"
import { useState } from 'react';

// Örnek veri yapısı
const imagesData = [
  { id: 1, url: 'image1.jpg', title: 'Firma A', tags: ['sağlık', 'reklam'] },
  { id: 2, url: 'image2.jpg', title: 'Firma B', tags: ['eğitim', 'sağlık'] },
  { id: 3, url: 'image3.jpg', title: 'Firma C', tags: ['pazarlama', 'sağlık'] },
  { id: 4, url: 'image4.jpg', title: 'Firma D', tags: ['reklam', 'pazarlama'] },
  { id: 5, url: 'image5.jpg', title: 'Firma E', tags: ['eğitim', 'pazarlama'] },
  { id: 6, url: 'image6.jpg', title: 'Firma F', tags: ['eğitim', 'reklam'] },
];

const App = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Etiket butonlarını oluştur
  const tags = ['sağlık', 'eğitim', 'reklam', 'pazarlama'];

  // Seçilen etikete göre filtreleme yap
  const filteredImages = selectedTag
    ? imagesData.filter((image) => image.tags.includes(selectedTag))
    : imagesData;

  return (
    <div>
      {/* Etiket butonları */}
      <div className="flex space-x-2 mb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-md focus:outline-none ${
              selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {tag}
          </button>
        ))}
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-md focus:outline-none ${
            selectedTag === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Tümü
        </button>
      </div>

      {/* Etiketlere göre görselleri göster */}
      <div className="grid grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={`Image ${image.id}`} />
            <div>
              <h3>{image.title}</h3>
              <p>{image.tags.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
