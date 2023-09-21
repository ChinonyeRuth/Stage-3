import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// Import your image files
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'

const images = [
  { id: '1', url: image1, tags: 'Tag1' },
  { id: '2', url: image2, tags: 'Tag2' },
  { id: '3', url: image3, tags: 'Tag3' },
  { id: '4', url: image4, tags: 'Tag4' },
  { id: '5', url: image5, tags: 'Tag5' },
  { id: '6', url: image6, tags: 'Tag6' },
  { id: '7', url: image7, tags: 'Tag7' },
  { id: '8', url: image8, tags: 'Tag8' },
  { id: '9', url: image9, tags: 'Tag9' },
  { id: '10', url: image10, tags: 'Tag10' },
  { id: '11', url: image11, tags: 'Tag11' },

  // Add more images as needed
]

const ImageGallery = () => {
  const [imageList, setImageList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading images with a delay (you can replace this with actual data fetching)
    setTimeout(() => {
      setImageList(images)
      setLoading(false) // Set loading to false when images are ready
    }, 2000) // Simulate a 2-second delay
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredImages = imageList.filter((image) =>
    image.tags.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(filteredImages)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setImageList(items)
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Beautiful Image Gallery
        </h1>
        <input
          type="text"
          placeholder="Search images by tag..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
        />

        {loading ? (
          <div className="flex justify-center items-center h-48">
            {/* Replace with your preferred loading UI */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="image-gallery">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {filteredImages.map((image, index) => (
                    <Draggable
                      key={image.id}
                      draggableId={image.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="group relative rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                        >
                          <img
                            src={image.url}
                            alt={image.tags}
                            className="w-full h-40 object-cover rounded-t-md"
                          />
                          <p className="text-center text-gray-800 py-2 bg-blue-200 bg-opacity-80 rounded-b-md">
                            {image.tags}
                          </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  )
}

export default ImageGallery
