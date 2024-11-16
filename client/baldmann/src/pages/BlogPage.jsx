
import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPage.css';
import arduino from '../components/arduino.jpg';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p2b from './p2b.jpg';
import p3  from './p3.jpg';
import p4 from './p4.jpg';
import p5a from './p5a.jpg';
import p5b from './p5b.jpg';
import h1a from './h1.jpg';
const blogData = {
    1: { title: "Who should upgrade to ESP32 from Arduino?", content:  (
        <>
            <p>In the ever-evolving world of electronics and embedded systems, enthusiasts and professionals alike find themselves at a crossroads when it comes to selecting the right platform for their projects. Among the popular choices, the ESP32 and Arduino stand out, each catering to distinct needs and preferences. While the ESP32 is lauded for its robust performance, connectivity options, and versatility in handling complex tasks, Arduino boards are celebrated for their simplicity, extensive community support, and rich ecosystem of libraries and shields. This raises an interesting question: who should consider upgrading from an Arduino to an ESP32?</p>

            <h2>Simplicity and Accessibility</h2>
            <p>
            One of the most appealing factors of Arduino is its theme of simplicity and ease of use. For those transitioning from the ESP32, particularly beginners or hobbyists, the straightforward programming environment and the vast array of libraries can be incredibly inviting. Arduino's IDE is designed to be accessible, allowing new users to focus on their projects without getting overwhelmed by complex configurations or debugging hurdles. If you’re someone who finds joy in experimentation without the need to navigate the intricacies of Wi-Fi or Bluetooth configurations, then Arduino is what you're looking for.
            </p>

            <h2>Extensive Community Support and Resources</h2>
            <p>
            Arduino has one of the largest communities in the maker space. The wealth of online tutorials, forums, and project sharing means that if you're looking for assistance or inspiration, you'll find it in abundance. If you’ve encountered roadblocks with your ESP32 projects or are simply looking for new ideas, diving into the Arduino ecosystem provides a treasure trove of resources. Whether a simple system to build a sensor or something more complex, the spirited cooperation of the Arduino community can help raise your learning.
            </p>

            <h2>Specialized Hardware Solutions</h2>
            <p>
            Arduino has various boards that specifically cater to the application demands. If your project requires precision, such as in robotics or specific sensor interactions, Arduino provides a plethora of boards with dedicated features that can simplify your work. Moving to an Arduino board like the Arduino Mega, which has numerous I/O pins, can be particularly beneficial for projects demanding extensive connectivity. For users who have experienced limitations in their ESP32 projects, the specialized offerings from Arduino can turn ambitious ideas into reality!
            </p>

            <h2>Real-time Applications</h2>
            <p>
            Arduino architecture is pretty good for projects that require real-time performance or strict timing constraints. The ESP32’s multitasking capabilities can come with a steep learning curve, and for many applications, that complexity isn’t necessary. If you are venturing into fields such as real-time data processing or precise control systems, Arduino provides a more predictable platform. Simplifying your project by choosing a dedicated microcontroller that meets the demands of real-time applications can lead to more reliable and efficient outcomes.
            </p>

            <h2>The Joy of Prototyping</h2>
            <p>
            Prototyping with Arduino carries some sort of magic about it. The ease of connecting components, uploading code, and seeing your project come to life is exhilarating. If you revel in rapid prototyping or creating proof-of-concept projects, Arduino allows for swift iterations. Its ecosystem supports countless shields and modules that can be seamlessly integrated, making it a playground for innovation. If this fast pace of development excites you, then shifting your focus to Arduino will amplify your creative enthusiasm! 
            </p>

            {/* Image Insertion */}
            <div className="blog-image">
                <img src={arduino} alt="ESP32 vs Arduino" />
                <p>Comparing ESP32 and Arduino performance.</p>
            </div>

            {/* Comparison Table */}
            <h3>Comparison table between ESP32 and Arduino:</h3>
            <table className="comparison-table">
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>ESP32</th>
                        <th>Arduino (Uno)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Microcontroller</td>
                        <td>Tensilica Xtensa Dual-Core (32-bit)</td>
                        <td>ATmega328P (8-bit)</td>
                    </tr>
                    <tr>
                        <td>Clock Speed</td>
                        <td>Up to 240 MHz</td>
                        <td>16 MHz</td>
                    </tr>
                    <tr>
                        <td>Flash Memory</td>
                        <td>4MB (external)</td>
                        <td>32KB</td>
                    </tr>
                    <tr>
                        <td>SRAM</td>
                        <td>520KB</td>
                        <td>2KB</td>
                    </tr>
                    <tr>
                        <td>GPIO Pins</td>
                        <td>34 (with various functions)</td>
                        <td>14 digital, 6 analog</td>
                    </tr>
                    <tr>
                        <td>Analog Pins</td>
                        <td>18 ADC (12-bit), 2 DAC (8-bit)</td>
                        <td>6 ADC (10-bit)</td>
                    </tr>
                    <tr>
                        <td>Digital Pins</td>
                        <td>Up to 34</td>
                        <td>14 (6 PWM capable)</td>
                    </tr>
                    <tr>
                        <td>Bluetooth Connectivity</td>
                        <td>Yes (Bluetooth 4.2, BLE)</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Operating System</td>
                        <td>RTOS compatible</td>
                        <td>None (Bare-metal programming)</td>
                    </tr>
                    <tr>
                        <td>USB Interface</td>
                        <td>Micro-USB (varies by board)</td>
                        <td>USB-B</td>
                    </tr>
                    <tr>
                        <td>Programming Language</td>
                        <td>C, C++ (Arduino IDE compatible)</td>
                        <td>C, C++ (Arduino IDE compatible)</td>
                    </tr>
                    <tr>
                        <td>Suitable Applications</td>
                        <td>IoT, wireless projects, more complex tasks</td>
                        <td>Basic DIY electronics, education, robotics</td>
                    </tr>
                    <tr>
                        <td>Power Management</td>
                        <td>Various low-power modes (deep sleep)</td>
                        <td>Limited low-power options</td>
                    </tr>
                </tbody>
            </table>

            <p>
            The ESP32 stands out for projects requiring Wi-Fi, Bluetooth, and higher processing power, while the Arduino Uno is ideal for simpler projects focused on basic digital and analog I/O control.
            </p>

            <h3>Conclusion</h3>
            <p>
            Upgrading from the ESP32 to Arduino isn’t necessarily about moving away from a powerful tool but rather about enhancing your toolkit for diverse applications. Whether you’re seeking simplicity, a robust support community, specialized hardware, or the thrill of hands-on prototyping, Arduino offers a fulfilling experience that complements the capabilities of the ESP32. In the world of electronics, each platform has its unique strengths, and for those eager to explore, the Arduino could very well be the spark that ignites your next big project! So, if you find yourself yearning for a new adventure, grab your Arduino board, and let your creativity soar.
            </p>

            {/* Another Image */}
            <div className="blog-image">
                <p>Prototyping with Arduino is a breeze!</p>
            </div>
        </>
    ), author: "Sanjana Sudarsan" },

    2: { title: "Mind the Gap: How Neurotransmitter affect brain computer interfaces", content:(
        <>
        <p>Imagine controlling this screen by the mere power of your thoughts, scrolling up and down,
            or even typing this article, as I am doing. That is the kind of potential that Brain Computer
            Interfaces, or BCIs for short, can fulfill. To put it a little more technically, BCIs acquire brain
            signals, process them, and translate them into commands that can be relayed to devices to
            produce desired outputs.</p>

            <div className="blog-image">
                <img src={h1a}  className='hrithika-blog' />
            </div>
            <p>Let’s dig a little deeper into the “acquisition of brain signals” part of that sentence. There are
                many ways to acquire these signals, a notable one being EEG, or electroencephalography.
                An EEG detects the activity of a large group of neurons that are active at the same time.
                How does it do that? Well, it measures postsynaptic potentials. Synapse is the tiny
                (seriously, it’s only 20 to 40 nanometers wide!) space between two neurons. Postsynaptic
                potentials are changes in the membrane potential of the neurons that are elicited by the
                binding of neurotransmitters to the receptors on the postsynaptic membrane. As you can
                predict, neurotransmitters are important little guys. They are the chemical messengers of our
                nervous system, playing a role in learning, motor control, regulating mood, sleep, and the list
                goes on. Different neurotransmitters fulfil different functions. Excitatory neurotransmitters
                stimulate the central nervous system, while inhibitory neurotransmitters do not.
            </p>

        <h3>Neurotransmitter Comparison Table</h3>
            <table className="comparison-table">
                <thead>
                <tr>
                    <th>Neurotransmitter</th>
                    <th>Chemical Nature</th>
                    <th>Function</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Glutamate</td>
                    <td>Amino acid</td>
                    <td>Excitatory neurotransmitter, most abundant, promotes cognitive functions such as learning and memory formation</td>
                </tr>
                <tr>
                    <td>Dopamine</td>
                    <td>Monoamine</td>
                    <td>Both excitatory and inhibitory, also a neuromodulator, plays a role in the reward circuit of the brain; surplus dopamine can result in poor impulse control and addiction behaviors</td>
                </tr>
                <tr>
                    <td>GABA</td>
                    <td>Amino acid</td>
                    <td>Inhibitory neurotransmitter, regulates anxiety, motor and vision control, lack of GABA is associated with mental health disorders whereas too much is associated with hypersomnia and lack of energy</td>
                </tr>
                <tr>
                    <td>Epinephrine</td>
                    <td>Monoamine</td>
                    <td>Excitatory neurotransmitter, plays a role in the fight or flight response and alertness; high levels of epinephrine can lead to high blood pressure, anxiety, and insomnia</td>
                </tr>
                <tr>
                    <td>Norepinephrine</td>
                    <td>Monoamine</td>
                    <td>Excitatory neurotransmitter, helps to regulate stress in the body by modulating the fight or flight response; low norepinephrine levels can lead to a lack of concentration</td>
                </tr>
                <tr>
                    <td>Serotonin</td>
                    <td>Monoamine</td>
                    <td>Inhibitory neurotransmitter, regulates anxiety, appetite, mood, sleep cycle, and pain control; serotonin deficit is linked to depression, fatigue, and suicidal thoughts</td>
                </tr>
                <tr>
                    <td>Endorphins</td>
                    <td>Peptide</td>
                    <td>Inhibitory neurotransmitter, lowers transmission of pain signals and promotes feelings of euphoria, also released after completing physical activities (contributes to “runner’s high”)</td>
                </tr>
                </tbody>
            </table>
            <br></br>
            <p>
                Neurotransmitters affect signal generation and transmission. Excitatory neurotransmitters
                such as glutamate, for example, are known to promote neuronal firing, which enhances
                signal strength and clarity. This is great for BCIs which rely on brain wave patterns. Inhibitory
                neurotransmitters, on the other hand, regulate excessive activity by balancing out the effects
                of excitatory neurotransmitters, and contribute to reducing noise in neural signals.
                High concentration and clarity are required when using BCI to control output devices (like
                prosthetic arms). Dopamine and norepinephrine are known for their roles in focus and
                attention. When these neurotransmitters are appropriately balanced, users are able to
                achieve better control over the interface due to enhanced signal consistency
            </p>
            <br></br>
            <p>Dopamine, as we now know, plays a role in the reward system of our body. In the context of
                BCIs, it supports learning and adapting to new tasks by reinforcing “successful” actions. This
                learning process allows the interface to adjust more effectively to each person’s unique brain
                activity.
            </p>
            <br></br>
            <p>
                Neurotransmitters such as serotonin and endorphins affect mood, and mood affects the
                brain signal quality. Mood variations can subtly shift brain wave patterns, impacting BCI
                performance. Moreover, during fearful and sad mood induction, the EEG activity increases, which can lead to a decrease in anxiety. Low dopamine levels (as observed in Parkinson’s
                disease) lead to a generalised slowing of the EEG, resulting in a weakening of signal
                transmission.

            </p>
            <br></br>
            <p>
                Whew, wasn’t that a wealth of information?
                Understanding and utilising how neurotransmitters affect BCIs is the key to creating robust
                and adaptable interfaces. Incorporation of neurochemical monitoring and predictive
                algorithms to adjust to a user’s mental and emotional state is an exciting avenue to explore,
                with applications in not just controlling prosthetic limbs, but also in treatment of mental
                disorders, even though the output in such a case may not stand out as outwardly as having
                a cyborg limb. Of course, there are everyday applications as well to simplify our mundane
                lives. I, for one, definitely look forward to the day when I’ll be able to use BCIs to type with
                the power of my mind!
            </p>
        </>
    ), author: "Hritika Pathak" },
    
    3: { title: "Hula-Looping with Arduino", content: (
        <>
        <p>In Arduino, mastering loops is a game-changer. Now we will see how loops "for" and "while" dig into the heart of programming, bringing out from simple control structures really powerful means of automating processes.
        </p>
        <h2>The ‘For’ Loop</h2>
        <p>Think of a "for" loop as something built to repeat tasks. Let's break down the anatomy of the loop: initialization, condition, and increment. With these three parts, you can easily loop actions like turning LEDs on and off in sequence. It's not just about blinking lights, though; "for" loops are foundational for efficient code, especially if you're controlling multiple outputs.</p>

        <h2>Syntax</h2>
        <div className="blog-image">
                <img src={p1}  />
        </div>
        <p>Initialization – where you define a starting point.<br></br>
        Condition – determines how long the loop will run.<br></br>
        Increment – changes the counter, helping the loop eventually end.</p>

        <div className="blog-image">
                <p>Example Circuit and code for this application:</p>
                <img src={p2}  />
                <img src={p2b}  />
        </div>
        <p>
        This implementation effectively controls the blinking of the pins: the yellow pin blinks three times, while the red pin blinks five times. By using a for loop instead of duplicating code for each blink, we streamline the process and improve the overall efficiency of the code. This approach not only reduces redundancy but also enhances maintainability, making it easier to modify the blinking patterns in the future
        </p>
        <h2>
        When to Use a ‘While’ Loop
        </h2>
        
        <p>A "while" loop is a bit different in that it continues as long as a condition is satisfied, which can be precisely what you want when you don't know beforehand how many times you want to repeat something. The best case for using a "while" loop is when waiting for something to happen to occur, like a reading from a sensor. </p>
        <div className="blog-image">
            <img src={p3} alt="code" />
        </div>
        <h2>Avoiding Common Pitfalls</h2>
        <p>One trap would be a possible infinite loop if a condition never changed or could become false. With the help of insertion of the "break" statements and careful checks for the conditions this can be avoided and, at last, the loop will escape. This is one important insight that will help any beginner avoid this kind of error that might freeze their Arduino.

        The use of an LED and button setup will make the "while" loop come alive. In this example, we program the Arduino to turn on an LED when a button is pressed and keeps it on until the button is released. This isn't about flipping lights on and off but building code that responds in real-time. It's very important for any interactive project.</p>
        <div className="blog-image">
            <img src={p4} alt="code" />
            <p>This code shows how easily "while" loops handle input continuously, which is useful for any project that needs to monitor inputs constantly.</p>
        </div>

        <div className="blog-image">
            <h2>Example circuit and code:</h2>
            <img src={p5a} alt="code" />
            <img src={p5b} alt="code" />
            <p>Put them together, and now you have something special: streamlined, efficient code that's easy to understand and run on any Arduino setup. Knowing the right loop for the job lets you handle tasks smoothly without extra code.</p>
        </div>

        </>
    ), author: "Pritha Sharma" },
    4: { title: "Importance of Balanced Datasets in Emotion Prediction Model", content: (
        <>
        <p>Isn’t it exciting to think of decoding human emotion by just using a single head band? Well as easy as it sounds it’s not that easy. As a machine learning specialist, I am currently developing a model for emotion prediction using EEG data. One major aspect of this process is the dataset for training the model. In this blog, I will be discussing the limitation often found with datasets when it comes to tasks concerning emotion recognition and how there is a need to balance the dataset for every class of emotions.</p>
        <h2>Limitation of EEG Datasets</h2>
        <p>I often look on platforms like Kaggle to find datasets for training my model. However, when it comes to EEG dataset for emotion classification, the options are limited. </p>
        <p>1. Class Imbalance: The dataset can have class imbalance; that is, some of the emotions are represented far more than others. For example, there might be many recordings of "happiness" but only a few of "sad." This results in the model performing well in the case of the more common emotion while performing poorly for a less common emotion, therefore reducing accuracy.<br></br><br></br></p>
        <p>2. Variation in Emotion Induction: Emotions are personal experiences and therefore, how they could be evoked in the experiment varies significantly from individual to individual. Such variation in experiments may create inconsistent data, and therefore, finding clear patterns by the model may be a challenge.<br></br><br></br> </p>
        <p>3. Artifacts and Noise: EEG data gets noisy due to the muscular movements, eye blinking, and external interference. So, if the dataset doesn't have good clean and reliable data, the model will perform poorly.<br></br><br></br></p>
        <p>4. Scarcity of Quality Datasets: Compared to other fields, there are very few EEG datasets for emotion classification. Some popular datasets exist, but they lack variety and enough recordings for each emotion, which makes it difficult to prepare a balanced and effective training set.<br></br><br></br></p>

        <h2>This takes us to the question, Why Balanced Datasets Matter?</h2>
        <p>Having nearly an equal number of examples for each emotional class is important for several reasons. First, a balanced dataset improves the performance of a model since it provides sufficient examples for learning the unique features of each emotion. Second, it reduces bias because an imbalanced dataset may make the model favour more common emotions while neglecting others, which may affect its performance in real-world applications. Also, a balanced dataset improves the model's generalization capabilities on new data, such that it will understand all emotions and not just concentrate on a few. It also ensures fair evaluation metrics, like precision and recall, which provide a more comprehensive view of the effectiveness of the model across all emotional states.</p>
        </>
    ), author: "Rakesh Prajapati" },
};

const BlogPage = () => {
    const { id } = useParams();
    const blog = blogData[id]; 

    if (!blog) return <div>Blog not found</div>;

    return (
        <div className="blog-content">
            <h1>{blog.title}</h1>
            <p className='author'><strong>By:</strong> {blog.author}</p>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogPage;