1. Explain the differences between deep learning and traditional machine learning models. Use the hints below:

| Traditional ML                                                                                                   | Deep Learning                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Methods like feature extraction requires manual intervention to identify and extract features                    | Models learn to identify and extract features automatically through multiple layers of a neural network, making it highly effective for complex tasks such as face recognition and object recognition |
| Performs well with small and medium-sized datasets since the models are relatively simpler                       | Trained on large volumes of datasets which enables it to learn complex patterns without manual specification                                                                                          |
| Typically trained on standard CPUs as most of the traditional algorithms do not require high computational power | Requires powerful computational infrastructure such as GPUs, TPUs or cloud infrastructure as it involves large-scale matrix multiplications across many layers.                                       |
| Works best with structured data such as arrays and spreadsheets                                                  | Handles unstructured data such as images and text                                                                                                                                                     |

2. Explain how Long Short-Term Memory (LSTM) networks are used in NLP to capture long-range dependencies in sequence data. Describe how LSTMs overcome the limitations of traditional RNNs.

Recurrent Neural Networks (RNN) handle sequential data by maintaining memory from previous inputs in a hidden state, which enables it to make predictions such as text in Google's search queries. But the network has difficulty in learning long-term dependencies due to the following limitations:

- Vanishing gradient problem: The gradient that helps the model to learn through backpropagation seems to diminish leading to ineffective calculations.
- Exploding gradient problem: In this case, the gradient becomes exponentially large resulting in unstable behaviour of the model.

Long Short-Term Memory (LSTM) networks are a type of RNN designed to overcome the limitations of standard RNNs. The LSTMs have an in-built memory system that helps the model to remember important details over long periods.

LSTMs use memory cells and gates to control the information through the network, allowing it to learn long-term dependencies in sequential data.

- Forget gate: Decides what information has to be removed from the memory cell, based on previous hidden state and current input.
- Input gate: Decides the new information to be stored in the memory cell.
- Memory cells: Retains important information over time
- Output gate: Decides the information from the memory cell, that is required to produce the output or the next prediction

In NLP, when long input text or commands are passed, a standard RNN might forget key information that was present at the beginning of the input due to the vanishing gradient problem. In a LSTM network, as the input data passes through the each of the gates, key information is selectively retained in the memory cell over long periods, discarding irrelevant details via the forget gate, enabling it to make informed predictions via the output gate.
